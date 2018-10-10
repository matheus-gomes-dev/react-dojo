/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable import/no-extraneous-dependencies */

import React, { Component } from 'react';

class Display extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log('lifeCycle componente Display: componentWillMount!');
  }

  componentDidMount() {
    console.log('lifeCycle componente Display: componentDidMount!');
    console.log(this.props);
  }

  componentWillReceiveProps() {
    console.log('lifeCycle componente Display: componentWillReceiveProps!');
  }

  componentWillUpdate() {
    console.log('lifeCycle componente Display: componentWillUpdate!');
  }

  componentWillUnmount() {
    console.log('lifeCycle componente Display: componentWillUnmount');
  }

  render() {
    return (
      <div className="calculator-display" style={ this.props.content === 'error' ? {'color' : 'red'} : {'color' : 'white'}}>
        <span>{ this.props.content }</span>
      </div>
    );
  }
};

export default Display;
