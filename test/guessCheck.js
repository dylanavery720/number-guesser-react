import React from 'react';
import { assert, expect } from 'chai';

import guessCheck from '../lib/functions/guessCheck';

describe('guessCheck', () => {
  it('should be a function', () => {
    assert.isFunction(guessCheck);
  });
});
