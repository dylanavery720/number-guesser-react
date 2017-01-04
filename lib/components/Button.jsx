import React from 'react'


const Button = ({ handleClick, disabled, text }) =>

      <button
      className='btn'
      onClick ={handleClick}
      disabled={disabled}>{text}</button>

export default Button
