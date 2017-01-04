import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
import sinon from 'sinon';
import Main from '../lib/components/Main';

describe('<Main />', () => {
  it('renders as a <section>', () => {
    const wrapper = shallow(<Main />);
    assert.equal(wrapper.type(), 'section');
  });

  it('should fire a ComponentDidMount function', () => {
    sinon.spy(Main.prototype, 'componentDidMount')
    const wrapper = mount(<Main />);
    expect(Main.prototype.componentDidMount.calledOnce).to.equal(true);
  });

  it('should render an empty div when no guess', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.find('UserGuess')).to.have.length(1);
  });

  it.skip('should have a button labeled Reset', () => {
    const wrapper = shallow(<Main />);
    const button = wrapper.find('Button');
    expect(button.props('text').text()).to.equal('Reset');
  });

  it('should render an empty div when no guess', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.find('UserGuess')).to.have.length(1);
  });
});
