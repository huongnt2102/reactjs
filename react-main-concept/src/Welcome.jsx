import React from 'react';
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

class Welcome extends React.Component {
  render() {
    console.log('props: ', this.props);
    return (
      <h1>
        Hello, {this.props.name} - {this.props.age}
      </h1>
    );
  }
}

export default Welcome;
