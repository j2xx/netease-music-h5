import React, { Component } from 'react';

import TabBar from '../containers/tab_bar';

export class App extends Component{

  render() {
    return <div>
      {this.props.children}
      <div style={{height: '1rem'}}></div>
      <TabBar router={this.props.router}/>
    </div>
  }
}

export class PageNotFound extends Component {
  render () {
    return <div>页面未找到</div>
  }
}