import React, { Component } from 'react';
import Icon from '../icon';
import classNames from 'classnames';

import enterSvg from '../../icons/enter.svg';

export default class Accordion extends Component {
  constructor (props) {
    super(props);
    this.state = {
      open: true
    }
  }

  render () {
    const { title, children } = this.props;
    const { open } = this.state;
    const className = classNames({
      'accordion': true,
      'accordion-close': !open
    })
    return <div className={className}>
      <div className="accordion-head" onClick={()=>this.setState({open: !open})}>
        <Icon src={enterSvg} size=".30" />
        {title}
      </div>
      <div className="accordion-body">
        {children}
      </div>
    </div>
  }
}