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
      null
    );
  }
};

export default Display;
