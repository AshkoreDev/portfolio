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
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      .skills__area--item {
        width: 160px;
        padding: 10px;
        text-align: center;
        border-radius: 6px;
        background-color: var(--grey);
      }
      .skills__area--item img {
        width: 40px;
        height: 40px;
      }
      .skills__area--item__title {
        color: var(--white);
        font-weight: bold;
        letter-spacing: 1.1px;
        font-size: var(--font-sm);
      }

      @media (hover: hover) {
        .skills__area--item:hover {
          opacity: .6;
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