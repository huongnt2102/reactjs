import React, { Component } from 'react';

export class TemperatureInput extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = (event) => {
    this.props.onTemperatureChange(event.target.value);
  };

  render() {
    const { title, temperature } = this.props;
    return (
      <div>
        <fieldset>
          <legend>Enter temperature in {title}</legend>
          <input value={temperature} onChange={this.handleChange} />
        </fieldset>
      </div>
    );
  }
}

export default TemperatureInput;
