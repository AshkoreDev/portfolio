class projectCard extends HTMLElement {

    constructor() {

      super();
      this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {

      return ['name', 'image', 'description', 'tecnologies', 'demo', 'repo'];
    }

    attributeChangedCallback(attr, oldVal, newVal) {
      if(attr === 'title' && oldVal !== newVal) {

        this.title = newVal;
      }
      if(attr === 'image' && oldVal !== newVal) {

        this.image = newVal;
      }
      if(attr === 'description' && oldVal !== newVal) {

        this.description = newVal;
      }
      if(attr === 'tecnologies' && oldVal !== newVal) {

        this.tecnologies = newVal;
      }
      if(attr === 'demo' && oldVal !== newVal) {

        this.demo = newVal;
      }
      if(attr === 'repo' && oldVal !== newVal) {

        this.repo = newVal;
      }
    }

    getTemplate() {

      const template = document.createElement('template');

      template.innerHTML = `
        <article class="card">
          <figure class="card__figure">
            <img src="${this.image}" alt="${this.title} Page Image" width="280" height="160" loading="lazy">
          </figure>

          <h3 class="card--title">${this.title}</h3>
          <p class="card--description">${this.description}</p>
          <p class="card--subtitle">Made with:</p>
          <p class="card--tecnologies">${this.tecnologies}</p>
          <div class="card__buttons">
            <a href="${this.demo}" target="_blank" title="Demo Link">Demo</a>
            <a href="${this.repo}" target="_blank" title="Repo Link">Code</a>
          </div>
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
          .card {
            width: 300px;
            min-height: 300px;
            padding: 10px;
            border-radius: 8px;
            background-color: var(--grey);
          }
          .card__figure {
            width: 280px;
            height: 150px;
            border-radius: 6px;
            background-color: var(--black);
          }
          .card__figure img {
            width: 100%;
            object-fit: fill;
            object-position: top;
            border-radius: inherit;
          }
          .card--title {
            margin: 30px 0 20px;
            color: var(--green);
            text-align: center;
            letter-spacing: 1.2px;
            font-size: var(--font-md);
          }
          .card--description {
            min-height: 50px;
            color: var(--white);
            letter-spacing: 1.1px;
            font-size: var(--font-sm);
          }
          .card--subtitle {
            margin-top: 20px;
            color: var(--green);
            letter-spacing: 1.2px;
            font-size: var(--font-sm);
          }
          .card--tecnologies {
            height: 30px;
            margin: 10px 0 15px;
            color: var(--white);
            letter-spacing: 1.1px;
            font-size: var(--font-sm);
          }
          .card__buttons {
            gap: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .card__buttons a {
            padding: 5px;
            color: var(--black);
            font-weight: bold;
            letter-spacing: 1.1px;
            font-size: var(--font-sm);
            text-decoration: none;
            border-radius: 4px;
            border: 1px solid var(--green);
            background-color: var(--green);
          }

          @media (hover: hover) {
            .card__buttons a:hover {
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

  customElements.define('project-card', projectCard);

  export { projectCard };