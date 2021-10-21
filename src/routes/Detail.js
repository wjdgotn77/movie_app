import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
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
          <div className="detail-contents">
            <img
              className="detail-img"
              src={location.state.poster}
              alt={location.state.title}
            />
            <div className="detail-summary">{location.state.summary}</div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
