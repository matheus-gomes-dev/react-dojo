/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable import/no-extraneous-dependencies */

import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../css/custom.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.renderFirstLineElements = this.renderFirstLineElements.bind(this);
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
    console.log('lifeCycle componente App: componentWillUpdate!');
  }

  componentWillUnmount() {
    console.log('lifeCycle componente App: componentWillUnmount');
  }

  renderFirstLineElements(elementsArray) {
    const elementsToRender = elementsArray.map((element, index) => {
      return (
        <div className="calculator-btn" key={`first-line-element-${index}`}>
          <span>{element}</span>
        </div>
      )
    });
    console.log(elementsToRender);
    return elementsToRender;
  }

  render() {
    const firstLineElements = ['1', '2', '3', '+'];
    return (
      <div className="app-container">
        <h1>Projeto React</h1>
        <div className="calculator">
          <div className="calculator-line">
            { this.renderFirstLineElements(firstLineElements) }
            {/* <div className="calculator-btn">
              <span>1</span>
            </div>
            <div className="calculator-btn">
              <span>2</span>
            </div>
            <div className="calculator-btn">
              <span>3</span>
            </div>
            <div className="calculator-btn">
              <span>+</span>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
};

export default Home;
