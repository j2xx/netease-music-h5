import React, { Component } from 'react';


export default class TopList extends Component {
  render () {
    const { thumb, children } = this.props;
    return <div className="top-list">
      <div className="top-list-thumb">
        <img src={thumb} alt="" />
      </div>
      <div className="top-list-rows">
        {
          children.map((item,i)=>{
            return <div key={i}>{i+1}.{item}</div>
          })
        }
      </div>
    </div>
  }
}