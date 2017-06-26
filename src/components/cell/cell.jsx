import React, { Component } from 'react';
import Icon from '../icon';

import enterSvg from '../../icons/enter.svg';

export default class Cell extends Component {
  render () {
    const { thumb, extra, brief, children, arrow } = this.props;
    return <div className="cell">
      <div className="cell-thumb">
        {thumb}
      </div>
      <div className="cell-line">
        <div className="cell-content">
          <div className="cell-title">{children}</div>
          <div className="cell-brief">{brief}</div>
        </div>
        <div className="cell-extra">
          {extra}
        </div>
        {
          arrow ?
          <div className="cell-arrow">
            <Icon src={enterSvg} size=".3" />
          </div>
          :
          ""
        }
      </div>
    </div>
  }
}