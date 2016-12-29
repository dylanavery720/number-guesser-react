import React, { Component } from 'react';
import { render } from 'react-dom';

import UserGuess from './UserGuess'
import Button from './Button'


export default class Main extends React.Component {

  render() {
    return (
        <section>
        <UserGuess />
        </section>
    )
  }

}

render(<Main />, document.getElementById('application'))
