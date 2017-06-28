import React, { Component } from 'react';

export default class TabBar extends Component {

  render () {
    return <div className="tab-bar" style={this.props.hide?{display: 'none'}:{display: 'flex'}}>
      {this.props.children}
    </div>
  }
}