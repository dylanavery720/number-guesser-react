import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';

import DisplayGuess from '../lib/components/DisplayGuess';

describe('<DisplayGuess />', () => {
  it('renders as a <div>', () => {
    const wrapper = shallow(<DisplayGuess />)
    assert.equal(wrapper.type(), 'div');
  });
});
