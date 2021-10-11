import React from 'react';
import PropTypes from "prop-types";

// componentDidMount() 에서 data를 fetch하고,
// fetch가 완료되면 render()를 통해 화면에 그린다.
// state는 동적으로 받아올 정보다. this.setState로 상태를 변경해줄 수 있다.
class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  componentDidMount() {
    // data fetch 하는 부분... 완료 되면 render 실행.
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 5000);
  }

  render() {
    // ES6 Destructoring assignment.
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready!"}</div>;
  }
}

export default App;
