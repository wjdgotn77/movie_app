import React from 'react';
import axios from "axios";

// componentDidMount() 에서 data를 fetch하고,
// fetch가 완료되면 render()를 통해 화면에 그린다.
// state는 동적으로 받아올 정보다. this.setState로 상태를 변경해줄 수 있다.
class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    // axios의 로딩이 끝나면 그 때 get을 실행해줘.
    const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    // ES6 Destructoring assignment.
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready!"}</div>;
  }
}

export default App;
