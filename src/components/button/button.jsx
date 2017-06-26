import React, { Component } from 'react';
import classNames from 'classnames';

export default class Button extends Component {
  render () {
    const type = this.props.type || 'none';
    const size = this.props.size || 'md';
    const className = classNames({
      'button': true,
      [`button-${type}`]: true,
      'button-circle': this.props.circle,
      [`button-${size}`]: true
    })
    return <div className={className}>
      {this.props.children}
    </div>
  }
}