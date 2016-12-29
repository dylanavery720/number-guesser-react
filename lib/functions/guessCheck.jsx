import React from 'react';

const guessCheck = (guess, random) => {
  if (Number(guess) === random) {
    return 'You got it buddy'
  }
  if (Number(guess) > random) {
    return 'That number is too high. Try again.'
  }
  if (Number(guess) < random) {
    return 'That number is too low. Try again.'
  }
}

export default guessCheck
