import React, { Component } from 'react';

export default class Tabs extends Component {
  render () {
    const { children } = this.props;
    const navs = [];
    const panes = [];
    this.props.children.map(pane=>{
      navs.push(<div>{pane.title}</div>);
      panes.push(pane);
    });
    return <div className="tabs">
      <div className="tab-head">
        {
          children.map((pane, index)=>{
            return <div 
                      key={index} 
                      className={index===0?'tab-nav tab-nav-active':'tab-nav'}
                    >
                      {pane.props.title}
                      <div className="tab-nav-bar"></div>
                    </div>
          })
        }
      </div>
      <div className="tab-body">
        {children}
      </div> 
    </div>
  }
}