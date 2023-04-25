import Component from '../core/Component'
import movieStore, { searchMovies } from '../store/movie.js'

export default class Search extends Component {
  render() {
    this.el.classList.add('search')
    this.el.innerHTML = /* html */ `
      <input 
      value="${movieStore.state.searchText}" 
      type="text" placeholder="ENTER THE MOVIE TITLE">
      <button class="btn btn-primary">SEARCH</button>
    `

    const inputEl = this.el.querySelector('input')
    inputEl.addEventListener('input', () => {
      movieStore.state.searchText = inputEl.value
    })

    inputEl.addEventListener('keydown', event => {
      if (event.key === 'Enter' && movieStore.state.searchText.trim()) {
        searchMovies(1)
      }
    })

    const btnEl = this.el.querySelector('.btn')
    btnEl.addEventListener('click', () => {
      if (movieStore.state.searchText.trim()) {
        searchMovies(1)
      }
    })
  }
}
