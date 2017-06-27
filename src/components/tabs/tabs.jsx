import React, { Component } from 'react';
import classNames from 'classnames';

export default class Tabs extends Component {
  constructor(props){
    super(props);
    this.state = {
      active: props.active||''
    }
  }

  onClick = (key) => {
    this.setState({
      active: key
    });
    if (this.props.onChange) {
      this.props.onChange(key);
    }
  }

  render () {
    const { children } = this.props;
    const { active } = this.state;
    return <div className="tabs">
      <div className="tab-head">
        {
          children.map(pane=>{
            const titleClassName = classNames({
              'tab-nav': true,
              'tab-nav-active': active===pane.key
            });
            return <div 
              key={pane.key} 
              className={titleClassName}
              onClick={()=>this.onClick(pane.key)}
            >
              {pane.props.title}
              <div className="tab-nav-bar"></div>
            </div>
          })
        }
      </div>
      <div className="tab-body">
        {
          children.map(pane=>{
            return <div key={pane.key} style={active===pane.key?{display: 'block'}:{display: 'none'}}>
              {pane}
            </div>
          })
        }
      </div> 
    </div>
  }
}