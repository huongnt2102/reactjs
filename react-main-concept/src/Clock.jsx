import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString()
    };
    this.date = '22/8/2022';
    const newState = {
      ...this.state,
      time: {
        created: new Date().toLocaleTimeString()
      },
      seconds: {
        created: new Date().getSeconds()
      }
    };
    this.setState(newState);
  }

  getTime = () => {
    const newState = {
      ...this.state,
      time: {
        created: new Date().toLocaleDateString()
      },
      seconds: {
        created: new Date().getSeconds()
      }
    };
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  };

  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <h2>It is {this.state.time}</h2>
        <h3>IT is {this.date}</h3>
        <button onClick={this.getTime}>Get Time</button>
      </div>
    );
  }
}
