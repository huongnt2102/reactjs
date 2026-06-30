import React, { Component } from 'react';
import TemperatureInput from './TemperatureInput';
import BoilingVerdict from './BoilingVerdict';

const convert = (temperature, scaleInput) => {
  const input = Number(temperature);
  if (Number.isNaN(input)) {
    return '';
  }

  let output;
  if (scaleInput === 'f') {
    output = (input - 32) / 1.8;
  } else {
    output = input * 1.8 + 32;
  }

  return Math.round(output * 1000) / 1000;
};

export class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: '',
      scale: 'c'
    };
  }

  handleChange = (scale) => (value) => {
    this.setState({
      temperature: value,
      scale
    });
  };

  render() {
    const { scale, temperature } = this.state;
    const convertValue = convert(temperature, scale);
    const celsius = scale === 'f' ? convertValue : temperature;
    const fahrenheit = scale === 'c' ? convertValue : temperature;

    return (
      <div>
        <TemperatureInput title='Celsius' temperature={celsius} onTemperatureChange={this.handleChange('c')} />
        <TemperatureInput title='Fahrenheit' temperature={fahrenheit} onTemperatureChange={this.handleChange('f')} />

        <BoilingVerdict celsius={celsius} />
      </div>
    );
  }
}

export default Calculator;
