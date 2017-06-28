import React, { Component } from 'react';
import Icon from '../components/icon';
import NavBar from '../components/nav_bar';
import Cell from '../components/cell';
import Button from '../components/button';
import Switch from '../components/switch';
import User from '../components/user';

import flipSvg from '../icons/flip.svg';
import flashlightSvg from '../icons/flashlight.svg';
import mailSvg from '../icons/mail.svg';
import integralSvg from '../icons/integral.svg';
import shopFillSvg from '../icons/shop_fill.svg';
import serviceSvg from '../icons/service.svg';
import scanSvg from '../icons/scan.svg';
import selectSvg from '../icons/select.svg';
import timeSvg from '../icons/time.svg';
import clockSvg from '../icons/clock.svg';
import setupSvg from '../icons/setup.svg';
import carSvg from '../icons/car.svg';
import sendSvg from '../icons/send.svg';
import promptSvg from '../icons/prompt.svg';

export default class Mine extends Component {
  render () {
    return <div className="mine">
      <NavBar right={<Icon src={flipSvg}/>} title="账号" />
      <div style={{height: '.9rem'}}></div>
      <User />
      <div style={{height: '.1rem', backgroundColor: '#F5F5F5'}}></div>
      <Cell thumb={<Icon src={mailSvg} />} arrow>我的消息</Cell>
      <div style={{height: '.1rem', backgroundColor: '#F5F5F5'}}></div>
      <Cell thumb={<Icon src={integralSvg} />} arrow>会员中心</Cell>
      <Cell thumb={<Icon src={shopFillSvg} />} arrow>商城</Cell>
      <Cell thumb={<Icon src={serviceSvg} />} arrow>在线听歌免流量</Cell>
      <div style={{height: '.1rem', backgroundColor: '#F5F5F5'}}></div>
      <Cell thumb={<Icon src={setupSvg} />} arrow>设置</Cell>
      <Cell thumb={<Icon src={scanSvg} />} arrow>扫一扫</Cell>
      <Cell thumb={<Icon src={selectSvg}/>} extra="官方红" arrow>个性换肤</Cell>
      <Cell 
        thumb={<Icon src={flashlightSvg} />} 
        extra={<Switch />}
      >夜间模式</Cell>
      <Cell thumb={<Icon src={timeSvg} />} arrow>定时关闭</Cell>
      <Cell thumb={<Icon src={clockSvg} />} arrow>音乐闹钟</Cell>
      <Cell thumb={<Icon src={carSvg} />} arrow>驾驶模式</Cell>
      <div style={{height: '.1rem', backgroundColor: '#F5F5F5'}}></div>
      <Cell thumb={<Icon src={sendSvg} />} arrow>分享网易云音乐</Cell>
      <Cell thumb={<Icon src={promptSvg} />} arrow>关于</Cell>
      <div style={{height: '.1rem', backgroundColor: '#F5F5F5'}}></div>
      <Button size="lg">
        退出登录
      </Button>
    </div>
  }
}