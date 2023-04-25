import Component from '../core/Component'
import movieStore from '../store/movie.js'
import MovieItem from './MovieItem.js'

export default class MovieList extends Component {
  constructor() {
    super()
    movieStore.subscribe('movies', () => {
      // movies가 갱신되면 render 함수를 호출
      this.render()
    })
    movieStore.subscribe('loading', () => {
      // movies가 갱신되면 render 함수를 호출
      this.render()
    })
    movieStore.subscribe('message', () => {
      // movies가 갱신되면 render 함수를 호출
      this.render()
    })
  }
  render() {
    this.el.classList.add('movie-list')
    this.el.innerHTML = /* html */ `
      ${
        movieStore.state.message
          ? `<div class="message">${movieStore.state.message}</div>`
          : `<div class="movies"></div>`
      }
      <div class="the-loader hide"></div>
    `

    const moviesEl = this.el.querySelector('.movies')
    moviesEl?.append(
      // moviesEl이 존재하면 append
      ...movieStore.state.movies.map(movie => {
        return new MovieItem({
          movie
        }).el
      })
    )

    const loaderEl = this.el.querySelector('.the-loader')
    movieStore.state.loading
      ? loaderEl.classList.remove('hide')
      : loaderEl.classList.add('hide')
  }
}
