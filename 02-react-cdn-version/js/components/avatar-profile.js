class AvatarProfile extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
  }

  createURL(service, username) {
    return `https://unavatar.io/${service}/${username}`;
  }

  render() {
    const service = this.getAttribute("service") ?? "github";
    const username =
      this.getAttribute("username") ?? "AlexanderEstebanZapata1994";
    const size = this.getAttribute("size") ?? 48;
    const url = this.createURL(service, username);
    this.shadowRoot.innerHTML = `
    
    <style>
      :host {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      img {
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        border: 2px solid #09f;
      }
    </style>
    <img 
        src="${url}" 
        alt="Avatar de ${username}" 
        class="avatar"
      />
    `;
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("avatar-profile", AvatarProfile);
