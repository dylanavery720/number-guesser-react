import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
import DisplayGuess from '../lib/components/DisplayGuess';

describe('<DisplayGuess />', () => {
  it('should render as a <div>', () => {
    const wrapper = shallow(<DisplayGuess />)
    assert.equal(wrapper.type(), 'div');
  });
  it('should display the currentGuess', () => {
    const wrapper = shallow(<DisplayGuess currentGuess='22' />)
    const guess = wrapper.find('h1')
    assert.equal(guess.text(), '22');
  });
});
