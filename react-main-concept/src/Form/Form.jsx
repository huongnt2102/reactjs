import React, { Component } from 'react';

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      textareaValue: '',
      selectValue: 'coconut'
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  };

  handleTextareaValue = (event) => {
    this.setState({
      textareaValue: event.target.value
    });
  };

  handleSelectChange = (event) => {
    this.setState({
      selectValue: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  handleCheckboxChange = (event) => {
    this.setState({});
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type='text' name='name' value={this.state.value} onChange={this.handleChange} />
          </label>

          <select value={this.state.selectValue} onChange={this.handleSelectChange}>
            <option value='grapfruit'>Grapefruit</option>
            <option value='lime'>Lime</option>
            <option value='coconut'>Coconut</option>
            <option value='mango'>Mango</option>
          </select>

          <input type='checkbox' name='' checked onChange={this.handleCheckboxChange} />

          <input type='submit' value='Submit' />
          <textarea value={this.state.textareaValue} onChange={this.handleTextareaValue} />
        </form>
      </div>
    );
  }
}

export default Form;
