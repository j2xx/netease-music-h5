import React, { Component } from 'react';
import classNames from 'classnames';

export default class MediaList extends Component {
  render () {
    const { type } = this.props;
    const className = classNames({
      'media-list': true,
      [`${type}-list`]: true
    })
    return <div className={className}>
      {this.props.children}
    </div>
  }
}