import React from 'react';
import { assert, expect } from 'chai';
import randomNumberGen from '../lib/functions/randomNumberGen';

describe('randomNumberGen', () => {
  it('should be a function', () => {
    assert.isFunction(randomNumberGen);
  });
});
