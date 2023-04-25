import Component from '../core/Component.js'

export default class Headline extends Component {
  render() {
    this.el.classList.add('headline')
    this.el.innerHTML = /* html */ `
      <h1>
        Movie<span>Clips</span>
      </h1>
      <p>
        Find all the movies in the world here. English Only
      </p>
    `
  }
}
