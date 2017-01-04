import React from 'react'
import Button from './Button'
import DisplayGuess from './DisplayGuess'
import randomNumberGen from '../functions/randomNumberGen'

const UserGuess = ({ randomnumber, currentGuess,
   min, max, draftMessage, updateState,
   handleGuess, handleClear }) =>
      <section className='container'>
        <DisplayGuess
        randomNumber={randomnumber}
        currentGuess={currentGuess}
        min={min}
        max={max}
        />
        <div className='guessBox'>
          <input
          id='guessinput'
          className='inputs'
          placeholder="Your best guess"
          type="number"
          min={min}
          max={max}
          value={draftMessage}
          onChange={updateState}
          ></input>
        </div>
        <Button text='Guess' id='guesstest' handleClick={handleGuess} />
        <Button text='Clear' id='cleartest'
        handleClick={handleClear}
        disabled={!draftMessage} />
      </section>

export default UserGuess
