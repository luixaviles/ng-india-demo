import { LitElement, html, css } from "lit";
import { property, customElement, state } from "lit/decorators.js";
import { users } from "./data";
import { User } from "./model";
import "./corp-user";

@customElement("corp-app")
export class CorpApp extends LitElement {
  static styles = css`
    .container {
      display: flex;
      flex-direction: row;
    }
    .column {
      display: flex;
      flex: auto;
    }
  `;

  @state() users: User[] = users;
  @state() currentUser?: User;

  render() {
    return html`
      <div class="container">
        <div class="column">
          <ul>
            ${this.users.map(
              (user) => html`
                <li>
                  <a href="#" @click=${() => this.selectUser(user)}>
                    ${user.fullName}</a
                  >
                </li>
              `
            )}
          </ul>
        </div>
        <div class="column">
          <corp-user .user=${this.currentUser}></corp-user>
        </div>
      </div>
    `;
  }

  private selectUser(user: User) {
    console.log("click", user);
    this.currentUser = user;
  }
}
