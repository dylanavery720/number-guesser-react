import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
import UserGuess from '../lib/components/UserGuess';

describe('<UserGuess />', () => {
  it('renders as a <section>', () => {
    const wrapper = shallow(<UserGuess />);
    assert.equal(wrapper.type(), 'section');
  });
});
