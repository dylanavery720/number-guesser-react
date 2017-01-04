import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
import sinon from 'sinon'
import UserGuess from '../lib/components/UserGuess';

describe('<UserGuess />', () => {
  it('renders as a <section>', () => {
    const wrapper = shallow(<UserGuess />);
    assert.equal(wrapper.type(), 'section');
  });
  it('clears when clear button clicked', () => {
    const wrapper = shallow(<UserGuess />);
    const clear = wrapper.find('#cleartest')
    const guess = wrapper.find('#guesstest')
    const input = wrapper.find('#guessinput')
    input.simulate('change', input.node.value = 'a')
    guess.simulate('click')
    expect(wrapper.state().input).to.equal('a');
    clear.simulate('click')
    expect(wrapper.state().input).to.equal('');
  })
});
