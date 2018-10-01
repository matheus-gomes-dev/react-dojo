/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable import/no-extraneous-dependencies */

import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../css/custom.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.renderCalculatorLineElements = this.renderCalculatorLineElements.bind(this);
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

  renderCalculatorLineElements(elementsArray) {
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
    const secondLineElements = ['4', '5', '6', '-'];
    const thirdLineElements = ['7', '8', '9', '*'];
    const fourthLineElements = ['.', '0', 'C', '='];
    return (
      <div className="app-container">
        <h1>Projeto React</h1>
        <div className="calculator">
          <div id="calculator-line-0" className="calculator-line">
            { this.renderCalculatorLineElements(firstLineElements) }
          </div>
          <div id="calculator-line-1" className="calculator-line">
            { this.renderCalculatorLineElements(secondLineElements) }
          </div>
          <div id="calculator-line-2" className="calculator-line">
            { this.renderCalculatorLineElements(thirdLineElements) }
          </div>
          <div id="calculator-line-3" className="calculator-line">
            { this.renderCalculatorLineElements(fourthLineElements) }
          </div>
        </div>
      </div>
    );
  }
};

export default Home;
