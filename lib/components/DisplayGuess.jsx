import React from 'react'
import guessCheck from '../functions/guessCheck'

const DisplayGuess = ({ currentGuess, randomNumber }) => {

    return (
      <div>
        {currentGuess &&
          <div>
          <h2>Your last guess was...</h2>
          <h1>{currentGuess}</h1>
          <h2>{guessCheck(currentGuess, randomNumber)}</h2>
          </div>
        }
      </div>
      )

}


export default DisplayGuess;
