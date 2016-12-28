import React from 'react'
import guessCheck from '../functions/guessCheck'


const DisplayGuess = ({ currentGuess, randomNumber }) => {

  if (!currentGuess) {
    return (
        <div></div>
      )
  }
  if (currentGuess) {
    return (
        <div>
        <h2>Your last guess was...</h2>
        <h1>{currentGuess}</h1>
        <h2>{guessCheck(currentGuess, randomNumber)}</h2>
        </div>
      )
  }
}


export default DisplayGuess;
