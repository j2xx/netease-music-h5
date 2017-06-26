import React, { Component } from 'react';

export default class TabPane extends Component {
  render () {
    return <div className="tab-pane">
      {this.props.children}
    </div>
  }
}