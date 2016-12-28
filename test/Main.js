import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';

import Main from '../lib/components/Main';

describe('<Main />', () => {
  it('renders as a <section>', () => {
    const wrapper = shallow(<Main />);
    assert.equal(wrapper.type(), 'section');
  });
});
