import {LitElement, html, css} from 'lit';
import {property, customElement} from 'lit/decorators.js';
import { User } from './model';

@customElement("corp-user")
export class CorpUser extends LitElement {
  static styles = css`
    .card {
      box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.5);
    }
    .card-content {
      padding: 10px;
    }
  `;

  @property({ type: Object }) user?: User;

  render() {
    if(this.user === undefined) {
      return '';
    }

    return html`
      <div class="card">
        <img src=${this.user.avatar? this.user.avatar: 'static/images/avatar.png'} />
        <div class="card-content">
          <h4>${this.user.fullName}</h4>
          <p>${this.user.role}</p>
          <button>Edit</button>
        </div>
      </div>
    `;
  }
}
