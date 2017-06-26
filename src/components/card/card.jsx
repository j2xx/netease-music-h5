import React, { Component } from 'react';
import Icon from '../icon';

import addSvg from '../../icons/add.svg';
import praiseSvg from '../../icons/praise.svg';
import messageSvg from '../../icons/message.svg';
import sendSvg from '../../icons/send.svg';
import moreSvg from '../../icons/more.svg';

export default class Card extends Component {
  render () {
    return <div className="card">
      <div className="card-head">
        <div className="card-head-thumb">
          <img src="http://dummyimage.com/200x200" alt=""/>
        </div>
        <div className="card-head-text">
          <div className="card-head-title">
            <div className="card-head-name">
              <a>娱扒皮</a>
              <span>分享单曲:</span>
            </div>
            <div className="card-head-btn">
              <Icon src={addSvg} size=".4"/>关注
            </div>
          </div>
          <div className="card-head-desc">
            最近
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="card-body-text">
          黄晓明虽然总是被人吐槽演技差，但照片表现力还是不错的，下面请大家欣赏一组晓明做菜图，配合左下文字食用更佳哦~
        </div>
        <div className="card-body-media">

        </div>
        <div className="car-body-note">
          --轻松一刻
        </div>
      </div>
      <div className="card-foot">
        <div>
          <Icon src={praiseSvg} size=".4" /> 388
        </div>
        <div>
          <Icon src={messageSvg} size=".4" /> 388
        </div>
        <div>
          <Icon src={sendSvg} size=".4" /> 388
        </div>
        <div className="card-foot-more">
          <Icon src={moreSvg} size=".4" />
        </div>
      </div>
    </div>
  }
}