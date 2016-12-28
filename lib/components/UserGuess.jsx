import React from 'react'
import Button from './Button'
import DisplayGuess from './DisplayGuess'

export default class UserGuess extends React.Component {
  constructor() {
    super()
    this.state = {
      draftMessage: '',
      currentGuess: '',
    }
    this.updateState = this.updateState.bind(this)
    this.handleGuess = this.handleGuess.bind(this)
    this.handleClear = this.handleClear.bind(this)
  }


  handleGuess(e) {
    this.setState(
      { currentGuess: this.state.draftMessage }
        )
  }

  handleClear(e) {
    this.setState({ draftMessage: '' })
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
      type="number"
      min={ 1 }
      max={ this.props.max }
      value={ this.state.draftMessage }
      onChange={ this.updateState }
      ></input>
      <Button text='Guess' handleClick={this.handleGuess} />
      <Button text='Clear' handleClick={this.handleClear} />
      <DisplayGuess randomNumber={this.props.randomNumber} currentGuess={this.state.currentGuess} />
      </section>
    )
  }

  }
