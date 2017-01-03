import React from 'react'
import Button from './Button'

export default class MinMax extends React.Component {

  render() {
    return (
  <div className='guessBox'>
    <input
    className='inputs'
    placeholder="min"
    type="number"
    value={ this.props.min }
    onChange={ this.props.updateMin}
    ></input>
    <input
    className='inputs'
    placeholder="max"
    type="number"
    value={ this.props.max }
    onChange={ this.props.updateMax }
    ></input>
    <Button text='Set' handleClick={this.props.handleClick} />
  </div>
)
  }

}
