import React from 'react'
import Button from './Button'
import DisplayGuess from './DisplayGuess'
import randomNumberGen from '../functions/randomNumberGen'

export default class UserGuess extends React.Component {
  constructor() {
    super()
    this.state = {
      draftMessage: '',
      currentGuess: '',
      max: 100,
      randomNumber: '',
    }
    this.updateState = this.updateState.bind(this)
    this.handleGuess = this.handleGuess.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.resetGame = this.resetGame.bind(this)
  }

  componentDidMount() {
    this.resetGame()
  }

  resetGame() {
    this.setState(
      { randomNumber: randomNumberGen(this.state.max),
        draftMessage: '',
        currentGuess: '',
        max: 100,
      }
    )
  }

  handleGuess(e) {
    this.setState({ currentGuess: this.state.draftMessage })
  }

  handleClear(e) {
    this.setState({ draftMessage: '' })
  }

  updateState(e) {
    this.setState({ draftMessage: e.target.value })
  }

  render() {
    return (
      <section>
      <DisplayGuess
      randomNumber={this.state.randomNumber}
      currentGuess={this.state.currentGuess} />
      <input
      className='inputs'
      placeholder="Your best guess"
      type="number"
      min={ 1 }
      max={ this.state.max }
      value={ this.state.draftMessage }
      onChange={ this.updateState }
      ></input>
      <Button text='Guess' handleClick={this.handleGuess} />
      <Button text='Clear' handleClick={this.handleClear} />
      <Button text='Reset' handleClick={this.resetGame} />
      </section>
    )
  }

  }
