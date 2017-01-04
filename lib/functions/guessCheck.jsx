import React from 'react';

const guessCheck = (guess, random, min, max) => {
  if (Number(guess) < min || Number(guess) > max) {
    return 'Please enter a number between the minimum & maximum.'
  }
  if (Number(guess) === random) {
    return 'You got it buddy. Click reset to advance.'
  }
  if (Number(guess) > random) {
    return 'That number is too high. Try again.'
  }
  if (Number(guess) < random) {
    return 'That number is too low. Try again.'
  }
}

export default guessCheck
