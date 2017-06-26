import React, { Component } from 'react';
import Button from '../button';
import Icon from '../icon';

import brushSvg from '../../icons/brush.svg';
import couponsSvg from '../../icons/coupons.svg';

export default class User extends Component {
  render () {
    return <div className="user">
      <div className="user-info">
        <div className="user-thumb">
          <img src="http://dummyimage.com/400x400" alt=""/>
        </div>
        <div className="user-content">
          <div className="user-name">JUNZI</div>
          <div className="user-level">Lv.8</div>
        </div>
        <div className="user-extra">
          <Button type="ghost" size="sm" circle>
            <Icon src={couponsSvg} size=".38"/>
            签到</Button>
        </div>
      </div>
      <div className="user-menu">
        <div>
          <span>动态</span>
          <b>0</b>
        </div>
        <div>
          <span>关注</span>
          <b>0</b>
        </div>
        <div>
          <span>粉丝</span>
          <b>0</b>
        </div>
        <div>
          <Icon src={brushSvg} size=".33"/>
          <span>我的资料</span>
        </div>
      </div>
    </div>
  }
}