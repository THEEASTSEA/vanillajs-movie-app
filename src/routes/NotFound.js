import Component from '../core/Component'

export default class NotFound extends Component {
  render() {
    this.el.classList.add('container', 'not-found')
    this.el.innerHTML = /* html */ `
      <h1>미안해요! 페이지를 찾을 수 없네요(__)</h1>
    `
  }
}
