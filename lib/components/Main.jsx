import React, { Component } from 'react';
import { render } from 'react-dom';
import randomNumberGen from '../functions/randomNumberGen'
import UserGuess from './UserGuess'


export default class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      max: 100,
      randomNumber: '',
    }
  }

  componentDidMount() {
    this.setState(
      { randomNumber: randomNumberGen(this.state.max) }
    )
  }


  render() {
    return (
        <section>
        <UserGuess randomNumber={this.state.randomNumber} />
        </section>
    )
  }

}

render(<Main />, document.getElementById('application'))
