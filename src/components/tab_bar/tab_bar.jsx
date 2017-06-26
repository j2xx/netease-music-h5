import React, { Component } from 'react';

export default class TabBar extends Component {

  render () {
    return <div className="tab-bar">
      {this.props.children}
    </div>
  }
}