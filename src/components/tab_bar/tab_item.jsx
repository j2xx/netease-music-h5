import React, { Component } from 'react';

export default class TabItem extends Component {


  render () {
    const { selected, icon, selectedIcon, onClick, children } = this.props;
    return <div 
              className={selected ? 'tab-item tab-item-active' : 'tab-item'}
              onClick={onClick}
           >
      <div className="tab-item-icon">
        {
          selected && selectedIcon ?
          selectedIcon
          :
          icon
        }
      </div>
      <div className="tab-item-title">
        {children}
      </div>
    </div>
  }
}