import React, { Component } from 'react';
import { render } from 'react-dom';

import UserGuess from './UserGuess'
import MinMax from './MinMax'
import Button from './Button'
import randomNumberGen from '../functions/randomNumberGen'


export default class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      min: 1,
      max: 100,
      randomnumber: '',
    }
    this.handleSet = this.handleSet.bind(this)
    this.updateMin = this.updateMin.bind(this)
    this.updateMax = this.updateMax.bind(this)
  }

  componentDidMount(){
    this.setState({randomnumber: randomNumberGen(this.state.max)})
  }

  handleSet(e) {
    this.setState({randomnumber: randomNumberGen(this.state.max)})
    // this.setState({ max: this.state.max, min: this.state.min })
  }

  updateMin(e) {
    this.setState({ min: e.target.value })
  }

  updateMax(e) {
    this.setState({ max: e.target.value })
  }

  render() {
    return (
        <section>
        <UserGuess
        min={this.state.min}
        max={this.state.max}
        randomnumber={this.state.randomnumber} />
        <div className='reset'>
          <Button text='Reset' handleClick={this.resetGame} disabled={!this.state.currentGuess} />
        </div>
        <MinMax
        min={this.state.min}
        max={this.state.max}
        handleClick={this.handleSet}
        updateMax={this.updateMax}
        updateMin={this.updateMin} />
        </section>
    )
  }

}

render(<Main />, document.getElementById('application'))
