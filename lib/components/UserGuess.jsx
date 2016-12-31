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
      min: 1,
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
      <section className='container'>
        <DisplayGuess
        randomNumber={this.state.randomNumber}
        currentGuess={this.state.currentGuess}
        min={ this.state.min }
        max={ this.state.max }
        />
        <div className='guessBox'>
          <input
          className='inputs'
          placeholder="Your best guess"
          type="number"
          min={ this.state.min }
          max={ this.state.max }
          value={ this.state.draftMessage }
          onChange={ this.updateState }
          ></input>
        </div>
        <Button text='Guess' handleClick={this.handleGuess} />
        <Button text='Clear' handleClick={this.handleClear} disabled={!this.state.draftMessage} />
          <div className='reset'>
            <Button text='Reset' handleClick={this.resetGame} disabled={!this.state.currentGuess} />
          </div>
      </section>
    )
  }

  }
