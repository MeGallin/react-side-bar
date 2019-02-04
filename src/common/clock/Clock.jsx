import React, { Component } from "react";
class Clock extends Component {
  state = {
    time: new Date()
  };

  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }

  tick() {
    setInterval(() => {
      this.setState({
        time: new Date()
      });
    }, 1000);
  }
  render() {
    return <p> {this.state.time.toLocaleString()}</p>;
  }
}

export default Clock;
