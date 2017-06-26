import React, { Component } from 'react';
import Icon from '../components/icon';
import NavBar from '../components/nav_bar';
import Cell from '../components/cell';
import Accordion from '../components/accordion';

import TabBar from '../containers/tab_bar';

import flipSvg from '../icons/flip.svg';
import customerserviceSvg from '../icons/customerservice.svg';
import playonSvg from '../icons/playon.svg';
import liveSvg from '../icons/live.svg';
import collectionSvg from '../icons/collection.svg';

export default class Music extends Component {
  render () {
    const { router } = this.props;
    return <div className="music">
      <NavBar left="更多" right={<Icon src={flipSvg}/>} title="我的音乐" />
      <div style={{height: '.9rem'}}></div>
      <Cell thumb={<Icon src={customerserviceSvg} />} extra="8" arrow>本地音乐</Cell>
      <Cell thumb={<Icon src={playonSvg} />} extra="100" arrow>最近播放</Cell>
      <Cell thumb={<Icon src={liveSvg} />} extra="4" arrow>我的电台</Cell>
      <Cell thumb={<Icon src={collectionSvg} />} extra="专辑/歌手/MV/专栏" arrow>我的收藏</Cell>
      <Accordion title="我创建的歌单">
        <Cell 
          thumb={<img src="http://dummyimage.com/200x200" alt=""/>}
          brief="11首，已下载8首"
        >
          我喜欢的音乐
        </Cell>
        <Cell 
          thumb={<img src="http://dummyimage.com/200x200" alt=""/>}
          brief="21首"
        >
          黄梅戏
        </Cell>
      </Accordion>
      <div style={{height: '1rem'}}></div>
      <TabBar current="music" router={router}/>
    </div>
  }
}