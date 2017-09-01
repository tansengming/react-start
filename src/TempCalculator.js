import React, { Component } from 'react';

class TempCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = { tempCelcius: 0, tempFahrenheit: 32 }
    this.updateCelciusTemp = this.updateCelciusTemp.bind(this);
    this.updateFahrenheitTemp = this.updateFahrenheitTemp.bind(this);
  }

  updateCelciusTemp(e) {
    this.setState({
      tempCelcius: this.getTemp(e.target.value),
      tempFahrenheit: this.getTemp(e.target.value) * 1.8 + 32
    })
  }

  updateFahrenheitTemp(e) {
    this.setState({
      tempCelcius: (this.getTemp(e.target.value) - 32) / 1.8,
      tempFahrenheit: this.getTemp(e.target.value),
    })
  }

  getTemp(temp) {
    return (parseInt(temp, 10) >= 0) ? parseInt(temp, 10) : 0
  }

  render() {
    return (
      <div>
        <TempShow updateTemp={this.updateCelciusTemp} temp={this.state.tempCelcius} tempType='C' />
        <TempShow updateTemp={this.updateFahrenheitTemp} temp={this.state.tempFahrenheit} tempType='F' />
      </div>
    );
  }
}

class TempShow extends Component {
  isBoiling() {
    if (this.props.tempType === 'C' && this.props.temp >= 100) {
      return true;
    } else if (this.props.tempType === 'F' && this.props.temp >= 212) {
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
        <span>{this.props.tempType}</span>
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