import React, { Component } from 'react';

export default class NavBar extends Component {
  render () {
    const { left, right, title } = this.props;
    return <div className="nav-bar">
      <div className="nav-bar-left">
        {left}
      </div>
      <div className="nav-bar-title">
        {title}
      </div>
      <div className="nav-bar-right">
        {right}
      </div>
    </div>
  }
}