import React, { Component, createRef } from 'react';

export default class UncontrolledComponent extends Component {
  constructor(props) {
    super(props);
    this.input = createRef();
    this.fileInput = createRef();
    this.state = {
      selectedFile: null,
      name: ''
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
  };

  onFileChange = (event) => {
    this.setState({
      selectedFile: event.target.files[0]
    });

    const formData = new FormData();
    formData.append('myFile', this.state.selectedFile, this.state.selectedFile.name);
  };

  onChangeInput = (event) => {
    this.setState({
      name: event.target.value
    });
  };

  render() {
    return (
      <div>
        <form>
          <label>Name:</label>
          <input
            type='text'
            ref={this.input}
            defaultValue='abc'
            value={this.state.name}
            onChange={this.onChangeInput}
          />
          <input type='file' name='avatar' ref={this.fileInput} onChange={this.onFileChange} />
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}
