import Component from '../core/Component'

export default class TheHeader extends Component {
  constructor() {
    super({
      tagName: 'header',
      state: {
        menus: [
          { name: 'Search', href: '#/' },
          { name: 'Movie', href: '#/movie?id=tt4520988' },
          { name: 'About', href: '#/about' }
        ]
      }
    })
    window.addEventListener('popstate', () => {
      this.render()
    })
  }
  render() {
    this.el.innerHTML = /* html */ `
      <a href="#/" class="logo">
        MOVIE<span>CLIPS</span>
      </a>
      <nav>
        <ul>
          ${this.state.menus
            .map(menu => {
              const href = menu.href.split('?')[0]
              const hash = location.hash.split('?')[0]
              const isActive = href === hash
              return /* html */ `
              <li>
                <a class="${isActive ? 'active' : ''}" href="${menu.href}">
                ${menu.name}
                </a>
              </li>
            `
            })
            .join('')}
        </ul>
      </nav>
      <a href="#/about" class="user">
        <img src="https://tistory1.daumcdn.net/tistory/6081640/attach/3f3363ce559e4391a84004653065d4a4" alt="User">
      </a>
    `
  }
}
