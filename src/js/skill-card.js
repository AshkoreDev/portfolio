class SkillCard extends HTMLElement {

  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['img', 'title'];
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    if(attr === 'img' && oldVal !== newVal) {
      this.img = newVal;
    }
    if(attr === 'title' && oldVal !== newVal) {
      this.title = newVal;
    }
  }

  getTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
      <article class="skills__area--item">
        <img src="${this.img}" alt="${this.title} logo" width="40" height="40" loading="lazy">
        <p class="skills__area--item__title">${this.title}</p>
      </article>

      ${this.getStyle()}
    `;
    return template;
  }

  getStyle() {
    return `
    <style>
      .skills__area--item {
        width: 100px;
        text-align: center;
      }

      .skills__area--item img {
        width: 40px;
        height: 40px;
      }

      .skills__area--item__title {
        margin-top: 10px;
        font-weight: bold;
        letter-spacing: 1.1px;
        color: var(--white);
      }

      @media (hover: hover) {
        .skills__area--item:hover {
          opacity: .8;
        }
      }
    </style>
    `;
  }

  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define('skill-card', SkillCard);

export { SkillCard };