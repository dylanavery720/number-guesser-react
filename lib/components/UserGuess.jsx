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
      // randomNumber: '',
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
    this.setState({
      // { randomNumber: randomNumberGen(this.props.max),
        draftMessage: '',
        currentGuess: '',
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
        randomNumber={this.props.randomnumber}
        currentGuess={this.state.currentGuess}
        min={ this.props.min }
        max={ this.props.max }
        />
        <div className='guessBox'>
          <input
          className='inputs'
          placeholder="Your best guess"
          type="number"
          min={ this.props.min }
          max={ this.props.max }
          value={ this.state.draftMessage }
          onChange={ this.updateState }
          ></input>
        </div>
        <Button text='Guess' handleClick={this.handleGuess} />
        <Button text='Clear' handleClick={this.handleClear} disabled={!this.state.draftMessage} />
      </section>
    )
  }

  }
