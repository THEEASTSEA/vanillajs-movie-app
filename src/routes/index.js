import { createRouter } from '../core/donghae'
import Home from './Home.js'
import Movie from './Movie.js'
import About from './About.js'
import NotFound from './NotFound.js'

export default createRouter([
  { path: '#/', component: Home },
  { path: '#/movie', component: Movie },
  { path: '#/about', component: About },
  { path: '.*', component: NotFound }
  // 페이지를 찾을 수 없을 때, 0개 이상의 모든 문자열을 의미하는 정규표현식
])
