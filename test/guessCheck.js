import React from 'react';
import { assert, expect } from 'chai';

import guessCheck from '../lib/functions/guessCheck';

describe('guessCheck', () => {
  it('should be a function', () => {
    assert.isFunction(guessCheck);
  });
  it('should return an affirmation if user guess correct', () => {
    const n = guessCheck(22, 22)
    assert.equal(n, 'You got it buddy. Click reset to advance.');
  });
  it('should return an error if user guess is out of range', () => {
    const n = guessCheck(220, 22, 1, 100)
    assert.equal(n, 'Please enter a number between the minimum & maximum.');
  });
});
