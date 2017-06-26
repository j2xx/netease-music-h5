import React, { Component } from 'react';

export default class Switch extends Component {
  constructor (props) {
    super(props);
    this.state = {
      value: false
    }
  }

  render () {
    return <label className="switch">
      <input type="checkbox" />
      <i></i>
    </label>
  }
}