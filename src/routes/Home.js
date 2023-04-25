import Component from '../core/Component.js'
import Headline from '../components/Headline.js'
import Search from '../components/Search.js'
import MovieList from '../components/MovieList.js'
import MovieListMore from '../components/MovieListMore.js'

// 페이지를 구분하는 용도로 사용되는 컴포넌트
export default class Home extends Component {
  render() {
    const headline = new Headline().el
    const search = new Search().el
    const movieList = new MovieList().el
    const movieListMore = new MovieListMore().el

    this.el.classList.add('container')
    this.el.append(headline, search, movieList, movieListMore)
  }
}
