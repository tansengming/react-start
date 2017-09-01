import React, { Component } from 'react';

class TempCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = { temp: 0 }
    this.updateTemp = this.updateTemp.bind(this);
  }

  updateTemp(e) {
    this.setState({temp: this.getTemp(e.target.value)})
  }

  getTemp(temp) {
    return (parseInt(temp, 10) >= 0) ? parseInt(temp, 10) : 0
  }

  render() {
    return <TempShow updateTemp={this.updateTemp} temp={this.state.temp}/>;
  }
}

class TempShow extends Component {
  isBoiling() {
    console.log("in!!!")
    if (this.props.temp > 100) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <div>
        <BoilingShow boiling={this.isBoiling()} />
        <input value={this.props.temp} onChange={this.props.updateTemp}/>
      </div>
    );
  }
}

function BoilingShow(props) {
  return ( props.boiling ? (
      <p>Boiling!!!</p>
    ) : (
      <p>Not Boiling ...</p>
    )
  );
}

export default TempCalculator