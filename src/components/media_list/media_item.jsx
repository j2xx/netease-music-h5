import React, { Component } from 'react';

export default class MediaItem extends Component {
  render () {
    const { src, alt, title, desc } = this.props;
    return <div className="media">
      <div className="media-thumb">
        <img src={src||'http://dummyimage.com/300x300'} alt={alt} />
        <div>{alt}</div>
      </div>
      <div className="media-text">
        <div className="media-title">{title}</div>
        <div className="media-desc">{desc}</div>
      </div>
    </div>
  }
}