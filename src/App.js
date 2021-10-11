import React from 'react';
import PropTypes from "prop-types";

// class component
// 함수가 아니기때문에 return 을 가지지 않고 render method를 가진다.
// ** react는 자동적으로 class component의 render method를 실행한다. **
class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("hello");
  }
  state = {
    // 동적 데이터를 담는 state.
    count: 0
  };
  add = () => {
    this.setState(current => ({count: current.count + 1}));
  };
  minus = () => {
    this.setState(current => ({count: current.count - 1}));
  }
  componentDidMount() {
    console.log("component did mount");
  }
  componentDidUpdate() {
    console.log("update")
  }
  render() {
    return (
    <div>
      <h1>The number is : {this.state.count}</h1>
      <button type="button" onClick={this.add}>Add</button>
      <button type="button" onClick={this.minus}>Minus</button>
    </div>
    );
  }
}

export default App;
