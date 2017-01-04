import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';

import Button from '../lib/components/Button';

describe('<Button />', () => {
  it('should render as a <button>', () => {
    const wrapper = shallow(<Button />)
    assert.equal(wrapper.type(), 'button');
  });
  it('should display whatever text is passed into it', () => {
    const wrapper = shallow(<Button text='Anything Literally' />)
    assert.equal(wrapper.text(), 'Anything Literally');
  });
});
