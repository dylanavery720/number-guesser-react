import React from 'react'
import Button from './Button'
import DisplayGuess from './DisplayGuess'
import randomNumberGen from '../functions/randomNumberGen'

export default class UserGuess extends React.Component {

  render() {
    return (
      <section className='container'>
        <DisplayGuess
        randomNumber={this.props.randomnumber}
        currentGuess={this.props.currentGuess}
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
          value={ this.props.draftMessage }
          onChange={ this.props.updateState }
          ></input>
        </div>
        <Button text='Guess' handleClick={this.props.handleGuess} />
        <Button text='Clear'
        handleClick={this.props.handleClear}
        disabled={!this.props.draftMessage} />
      </section>
    )
  }

  }
