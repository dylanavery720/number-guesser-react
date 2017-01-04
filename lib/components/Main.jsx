import React, { Component } from 'react';
import { render } from 'react-dom';

import UserGuess from './UserGuess'
import MinMax from './MinMax'
import Button from './Button'
import randomNumberGen from '../functions/randomNumberGen'
import guessCheck from '../functions/guessCheck'


export default class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      min: 1,
      max: 100,
      randomnumber: '',
      currentGuess: '',
      draftMessage: '',
    }
    this.handleSet = this.handleSet.bind(this)
    this.updateMin = this.updateMin.bind(this)
    this.updateMax = this.updateMax.bind(this)
    this.resetGame = this.resetGame.bind(this)
    this.handleGuess = this.handleGuess.bind(this)
    this.updateState = this.updateState.bind(this)
    this.handleClear = this.handleClear.bind(this)
  }

  componentDidMount() {
    this.setState({ randomnumber: randomNumberGen(this.state.max, this.state.min) })
  }

  handleSet(e) {
    this.setState(
      { randomnumber: randomNumberGen(this.state.max, this.state.min),
        draftMessage: '',
        currentGuess: '',
      }
    )
  }

  updateMin(e) {
    this.setState({ min: e.target.value })
  }

  updateMax(e) {
    this.setState({ max: e.target.value })
  }

  updateState(e) {
    this.setState({ draftMessage: e.target.value })
  }

  handleGuess(e) {
    this.setState({ currentGuess: this.state.draftMessage })
    this.guessCheckCheck()
  }

  handleClear(e) {
    this.setState({ draftMessage: '' })
  }

  resetGame() {
    this.setState(
      { randomnumber: randomNumberGen(this.state.max, this.state.min),
        min: 1,
        max: 100,
        draftMessage: '',
        currentGuess: '',
      }
    )
  }

  guessCheckCheck() {
    if (guessCheck(this.state.draftMessage, this.state.randomnumber,
      this.state.min, this.state.max) === 'You got it buddy.') {
      this.setState(
        { randomnumber: randomNumberGen(this.state.max, this.state.min),
          min: this.state.min - 10,
          max: this.state.max + 10,
          draftMessage: '',
          currentGuess: '',
        }
      )
    }
  }

  render() {
    return (
      <section>
        <UserGuess
        min={this.state.min}
        max={this.state.max}
        randomnumber={this.state.randomnumber}
        handleGuess={this.handleGuess}
        updateState={this.updateState}
        handleClear={this.handleClear}
        currentGuess={this.state.currentGuess}
        draftMessage={this.state.draftMessage}/>
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
