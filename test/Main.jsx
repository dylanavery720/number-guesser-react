import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';

import Main from '../lib/components/Main';



describe('<Main />', () => {
  it('renders as a <section>', () => {
    const wrapper = shallow(<Main />)
    assert.equal(wrapper.type(), 'section');
  });

  it.skip('renders a <Filter />', () => {
    const wrapper = shallow(<Application />);
    expect(wrapper.find(Filter)).to.have.length(1);
  });

  it.skip('should render a <MessageWindow />', () => {
    const wrapper = shallow(<Application />);
    expect(wrapper.find(MessageWindow)).to.have.length(1);
  });

  it.skip('should render a <UserList />', () => {
    const wrapper = shallow(<Application />);
    expect(wrapper.find(UserList)).to.have.length(1);
  });

  it.skip('should render a <UserInput />', () => {
    const wrapper = shallow(<Application />);
    expect(wrapper.find(UserInput)).to.have.length(1);
  });
});
