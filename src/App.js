import React from "react";
import axios from "axios";
import Movie from "./Movie";

/* componentDidMount() 에서 data를 fetch하고,
 * fetch가 완료되면 render()를 통해 화면에 그린다.
 * state는 동적으로 받아올 정보다. this.setState로 상태를 변경해줄 수 있다.
 */
class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    /* axios의 로딩이 끝나면 그 때 get을 실행해줘.
     * const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
     * console.log(movies.data.data.movies);
     *  ES6 문법으로 위의 코드 작성.
     * const { data : { data : { movies }}} = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
     */
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    // ES6 Destructoring assignment.
    const { isLoading, movies } = this.state;
    return (
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader__text">"Loading..."</span>
          </div>
        ) : (
          <div class="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
