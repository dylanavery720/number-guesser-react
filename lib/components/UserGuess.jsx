import React from 'react'
import Button from './Button'
// import guessCheck from '../functions/guessCheck'
import DisplayGuess from './DisplayGuess'

export default class UserGuess extends React.Component {
  constructor() {
    super()
    this.state = {
      draftMessage: '',
      currentGuess: '',
      guessText: ''
    }
    this.updateState = this.updateState.bind(this)
    this.handleGuess = this.handleGuess.bind(this)
    this.guessCheck = this.guessCheck.bind(this)
  }


  handleGuess(e) {
    this.guessCheck(this.state.draftMessage, this.props.randomNumber)
    this.setState(
      { currentGuess: this.state.draftMessage }
        )
  }

  guessCheck(guess, random) {
    if (Number(guess) === random) {
      this.setState({ guessText: 'You got it' })
    }
    if (Number(guess) > random) {
      this.setState({ guessText: 'That is too high' })
    }
    if (Number(guess) < random) {
      this.setState({ guessText: 'That is too low' })
    }
  }

  updateState(e) {
    this.setState(
        { draftMessage: e.target.value }
      )
  }

  render() {
    return (
      <section>
      <input
      placeholder="Your best guess"
      type="text"
      value={ this.state.draftMessage }
      onChange={ this.updateState }
      ></input>
      <Button text='Guess' handleClick={this.handleGuess} />
      <DisplayGuess randomNumber={this.props.randomNumber} currentGuess={this.state.currentGuess}
      guessHint={this.state.guessText} />
      </section>
    )
  }

  }
