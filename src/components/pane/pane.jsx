import React, { Component } from 'react';
import Icon from '../icon';

import enterSvg from '../../icons/enter.svg';

export default class Pane extends Component {
  render () {
    return <div className="panel">
      <div className="pane-title">
        <span className="pane-title-bar"></span>{this.props.title}
        <Icon src={enterSvg} size=".4"/>
      </div>
      <div className="pane-body">
        {this.props.children}
      </div>
    </div>
  }
}