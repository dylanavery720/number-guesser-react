import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';

import DiplayGuess from '../lib/components/DisplayGuess';



describe('<DisplayGuess />', () => {
  it('renders as a <section>', () => {
    const wrapper = shallow(<DisplayGuess />)
    assert.equal(wrapper.type(), 'section');
  });

});
