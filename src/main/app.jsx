/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable import/no-extraneous-dependencies */

import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../css/custom.css';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log('lifeCycle componente App: componentWillMount!');
  }

  componentDidMount() {
    console.log('lifeCycle componente App: componentDidMount!');
  }

  componentWillReceiveProps() {
    console.log('lifeCycle componente App: componentWillReceiveProps!');
  }

  componentWillUpdate() {
    console.log('lifeCycle componente App: componentWillUpdate');
  }

  componentWillUnmount() {
    console.log('lifeCycle componente App: componentWillUnmount');
  }

  render() {
    return (
      <div>
        <h1>Projeto React</h1>
      </div>
    );
  }
};

export default Home;
