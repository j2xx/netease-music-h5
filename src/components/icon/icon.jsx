import React, { Component } from 'react';

export default class Icon extends Component {

  render () {
    const { src, size } = this.props;
    return <svg className="icon" style={{width: `${size}rem`, height: `${size}rem`}}>
      <use xlinkHref={src}/>
    </svg>
  }
}