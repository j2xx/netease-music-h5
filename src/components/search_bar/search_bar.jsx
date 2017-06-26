import React, { Component } from 'react';
import classNames from 'classnames';
import Icon from '../icon';

import translationSvg from '../../icons/translation.svg';
import flipSvg from '../../icons/flip.svg';

export default class SearchBar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      value: '',
      focus: false
    }
  }

  onFocus = () => {
    this.setState({
      focus: true
    });
  }

  onCancel = () => {
    this.setState({
      value: '',
      focus: false
    })
  }

  onChange = (e) => {
    this.setState({
      value: e.value
    })
  }

  render () {
    const className = classNames({
      'search-bar': true,
      'search-bar-focus': this.state.focus
    })
    return <div className={className}>
      <div className="search-btn search-left">
        <Icon src={translationSvg} />
      </div>
      <div className="search-input">
        <input 
          type="search" 
          placeholder="搜索" 
          value={this.state.value}
          onFocus={this.onFocus} 
          onChange={(e)=>this.onChange(e)}
        />
      </div>
      <div className="search-cancel" onClick={this.onCancel}>
        取消
      </div>
      <div className="search-btn search-right">
        <Icon src={flipSvg} />
      </div>
    </div>
  }
}