class SkillCard extends HTMLElement {

  constructor() {

    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {

    return ['image', 'title'];
  }

  attributeChangedCallback(attr, oldVal, newVal) {

    if(attr === 'image' && oldVal !== newVal) {

      this.image = newVal;
    }
    if(attr === 'title' && oldVal !== newVal) {

      this.title = newVal;
    }
  }

  getTemplate() {

    const template = document.createElement('template');

    template.innerHTML = `
      <article class="skills__area--item">
        <img src="${this.image}" alt="${this.title} logo" width="30" height="30" loading="lazy">
        <p>${this.title}</p>
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
          width: 120px;
          padding: 10px;
          text-align: center;
          border-radius: 6px;
          background-color: var(--grey);
        }
        .skills__area--item img {
          width: 30px;
          height: 30px;
        }
        .skills__area--item p {
          color: #fff;
          font-size: 1.6rem;
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