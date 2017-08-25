import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timeID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timeID);
  }

  tick() {
    this.setState({date: new Date()});
  }

  render() {
    return (
      <div>
        The time is {this.state.date.toLocaleTimeString()}
      </div>
    )
  }
}

export default Clock;