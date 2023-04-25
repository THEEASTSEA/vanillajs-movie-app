import Component from './core/Component.js'
import TheHeaderComponent from './components/TheHeader.js'
import TheFooterComponent from './components/TheFooter.js'

export default class App extends Component {
  render() {
    const TheHeader = new TheHeaderComponent().el
    const TheFooter = new TheFooterComponent().el
    const routerView = document.createElement('router-view')

    this.el.append(TheHeader, routerView, TheFooter)
  }
}
