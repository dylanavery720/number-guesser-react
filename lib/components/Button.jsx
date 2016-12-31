import React from 'react'


export default class Button extends React.Component {

  render() {
    return (
      <button
      className='btn'
      onClick ={ this.props.handleClick }
      disabled={ this.props.disabled }>{ this.props.text }</button>
    )
  }
}
