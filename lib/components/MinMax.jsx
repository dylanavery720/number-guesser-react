import React from 'react'
import Button from './Button'

const MinMax = ({ min, updateMin, max, updateMax, handleClick }) =>

  <div className='guessBox'>
    <input
    className='inputs'
    placeholder="min"
    type="number"
    value={min}
    onChange={updateMin}
    ></input>
    <input
    className='inputs'
    placeholder="max"
    type="number"
    value={max}
    onChange={updateMax}
    ></input>
    <Button text='Set' handleClick={handleClick} />
  </div>


export default MinMax
