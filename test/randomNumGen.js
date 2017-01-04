import React from 'react';
import { assert, expect } from 'chai';
import randomNumberGen from '../lib/functions/randomNumberGen';

describe('randomNumberGen', () => {
  it('should be a function', () => {
    assert.isFunction(randomNumberGen);
  });
  it('should generate a number between min and max', () => {
    const n = randomNumberGen(1, 100)
    assert.isAtLeast(n, 1);
    assert.isBelow(n, 100)
  });
});
