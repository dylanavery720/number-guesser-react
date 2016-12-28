import React from 'react';

const guessCheck = (guess, random) => {
  if (Number(guess) === random) {
    return 'You got it buddy'
  }
  if (Number(guess) > random) {
    return 'That is too high'
  }
  if (Number(guess) < random) {
    return 'That is too low'
  }
}

export default guessCheck
