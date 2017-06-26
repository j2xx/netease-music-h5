import React, { Component } from 'react';

export default class SearchBar extends Component {
  render () {
    return <div className="search-bar">
      <div className="search-input">
        <input type="search" placeholder="搜索"/>
      </div>
      <div className="search-cancel">
        取消
      </div>
    </div>
  }
}