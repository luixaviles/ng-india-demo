import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { Speaker } from './model';

@customElement('corp-card')
export class CorpCard extends LitElement {
  static override styles = css`
    :host {
      display: block;
    }
    .card {
      box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.5);
      max-width: 400px;
    }
    .card-content {
      padding: 10px;
    }
    button {
      background-color: #ffffff;
      border: 1px solid gray;
      color: #000000de;
      padding: 10px 20px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      margin: 4px 2px;
      cursor: pointer;
      border-radius: 4px;
    }
  `;

  @property({ type: Object }) speaker?: Speaker = {
    id: 0,
    fullName: 'Luis Aviles',
    role: 'Software Engineer',
  };

  override render() {
    if (this.speaker === undefined) {
      return '';
    }

    return html`
      <div class="card">
        <img
          width="300px"
          src=${this.speaker.avatar
            ? this.speaker.avatar
            : 'assets/images/avatar.png'}
        />
        <div class="card-content">
          <h4>${this.speaker.fullName}</h4>
          <p>${this.speaker.role}</p>
          <button @click=${this.handleEdit}>Edit</button>
        </div>
      </div>
    `;
  }

  private handleEdit() {
    this.dispatchEvent(
      new CustomEvent<Speaker>('editSpeaker', {
        detail: this.speaker,
      })
    );
  }
}
