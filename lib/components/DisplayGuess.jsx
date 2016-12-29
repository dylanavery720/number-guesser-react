import React from 'react'
import guessCheck from '../functions/guessCheck'
import Button from './Button'


const DisplayGuess = ({ currentGuess, randomNumber, resetGame }) => {
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
        <Button text='Reset' handleClick={resetGame} />
        </div>
      )
  }
}


export default DisplayGuess;
