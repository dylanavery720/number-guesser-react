import React from 'react'


export default class DisplayGuess extends React.Component {


  render() {
    if (!this.props.currentGuess) {
      return (
        <div></div>
      )
    }
    if (this.props.currentGuess) {
      return (
        <div>
        <h2>Your last guess was...</h2>
        <h1>{this.props.currentGuess}</h1>
        <h2>{this.props.guessHint}</h2>
        </div>
      )
    }
  }

}
