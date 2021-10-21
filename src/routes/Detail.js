import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    console.log(location.state);
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="detail-container">
          <h1 className="detail-title">{location.state.title}</h1>
          <div className="detail-year">{location.state.year}</div>
          <div className="detatil-summary">{location.state.summary}</div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
