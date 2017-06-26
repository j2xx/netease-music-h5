import React, { Component } from 'react';

export class App extends Component{

  render() {
    return this.props.children
  }
}

export class PageNotFound extends Component {
  render () {
    return <div>页面未找到</div>
  }
}