class projectCard extends HTMLElement {

    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
      return ['name', 'img', 'description', 'demo', 'repo'];
    }

    attributeChangedCallback(attr, oldVal, newVal) {
      if(attr === 'name' && oldVal !== newVal) {
        this.name = newVal;
      }
      if(attr === 'img' && oldVal !== newVal) {
        this.img = newVal;
      }
      if(attr === 'description' && oldVal !== newVal) {
        this.description = newVal;
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
        <article class="projects__card">
            <div class="projects__card--line"></div>
            <section class="projects__card--section">
              <h3 class="projects__card--title">${this.name}</h3>
              <figure class="projects__card--img">
                <img src="${this.img}" alt="${this.name} Page Image" loading="lazy">
              </figure>
              <p class="projects__card--description">${this.description}</p>
              <section class="projects__card--buttons">
                <a href="${this.demo}" target="_blank">Demo</a>
                <a href="${this.repo}" target="_blank">Code</a>
              </section>
            </section>
          </article>
        ${this.getStyle()}
      `;
      return template;
    }

    getStyle() {
      return `
      <style>
        .projects__card {
          width: 300px;
          min-height: 400px;
          display: flex;
          flex-direction: column;
          border-radius: 10px;
          background-color: var(--grey);
        }

        .projects__card--line {
          height: 15px;
          border-radius: 10px 10px 0 0;
          background-color: var(--green);
        }

        .projects__card--section {
          padding: 10px;
        }

        .projects__card--title {
          min-height: 45px;
          font-size: 2rem;
          text-align: center;
          letter-spacing: 4px;
          color: var(--white);
        }

        .projects__card--img {
          width: 260px;
          height: 180px;
          margin: 0px auto;
          border-radius: 10px;
          background-color: var(--light-grey);
        }

        .projects__card--img img {
          width: 100%;
          height: 100%;
          border-radius: inherit;
          object-fit: cover;
        }

        .projects__card--description {
          min-height: 50px;
          margin-bottom: 20px;
          padding-top: 20px;
          font-size: 1.4rem;
          letter-spacing: 1.5px;
          text-align: justify;
          color: var(--white);
          border-top: 1px solid var(--green);
        }

        .projects__card--buttons {
          margin-bottom: 10px;
          display: flex;
          justify-content: space-around;
        }

        .projects__card--buttons a {
          padding: 10px 20px;
          font-size: 1.5rem;
          letter-spacing: 2px;
          text-decoration: none;
          color: var(--btn-bg-color);
          border-radius: 4px;
          background-color: var(--green);
        }

        @media (hover: hover) {
          .projects__card--buttons a:hover {
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

  customElements.define('project-card', projectCard);

  export { projectCard };