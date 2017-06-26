import React, { Component } from 'react';
import Icon from '../components/icon';
import NavBar from '../components/nav_bar';
import Card from '../components/card';

import TabBar from '../containers/tab_bar';

import addpeopleSvg from '../icons/addpeople.svg';
import flipSvg from '../icons/flip.svg';;

export default class Group extends Component {
  render () {
    const { router } = this.props;
    return <div className="group">
      <NavBar left={<Icon src={addpeopleSvg}/>} right={<Icon src={flipSvg}/>} title="附近/动态" />
      <div style={{height: '.9rem'}}></div>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <div style={{height: '1rem'}}></div>
      <TabBar current="group" router={router}/>
    </div>
  }
}