import React, { Component } from 'react';
import SearchBar from '../components/search_bar';
import Tabs from '../components/tabs';
import Pane from '../components/pane';
import MediaList from '../components/media_list';
import Slider from '../components/slider';
import Icon from '../components/icon';

import TabBar from '../containers/tab_bar';

import videoSvg from '../icons/video.svg';
import remindSvg from '../icons/remind.svg';
import stealthSvg from '../icons/stealth.svg';


const TabPane = Tabs.TabPane;
const MediaItem = MediaList.MediaItem;

class Home extends Component {

  render () {
    const { router } = this.props;
    return (
      <div className="home">
        <SearchBar />
        <div style={{height: '.9rem'}} />
        <Tabs>
          <TabPane title="个性推荐">

            <Slider />
            <div className="flex-container menu">
              <div className="flex-container flex-column">
                <Icon src={videoSvg} size=".88"/>
                私人FM
              </div>
              <div className="flex-container flex-column">
                <Icon src={remindSvg} size=".88"/>
                每日歌曲推荐
              </div>
              <div className="flex-container flex-column">
                <Icon src={stealthSvg} size=".88"/>
                云音乐热歌榜
              </div>
            </div>
            <Pane title="推荐歌单">
              <MediaList type="music">
                <MediaItem src="" alt="" title="网易20周年，我们与你一起走过" desc=""/>
                <MediaItem src="" alt="" title="经典怀旧 | 哼着妈妈唱过的老歌" desc=""/>
                <MediaItem src="" alt="" title="『不悔梦归处 只恨太匆匆』" desc=""/>
                <MediaItem src="" alt="" title="网易20周年，我们与你一起走过" desc=""/>
                <MediaItem src="" alt="" title="经典怀旧 | 哼着妈妈唱过的老歌" desc=""/>
                <MediaItem src="" alt="" title="『不悔梦归处 只恨太匆匆』" desc=""/>
              </MediaList>
            </Pane>
            <Pane title="独家放送">
              <MediaList type="music">
                <MediaItem src="" alt="" title="网易20周年，我们与你一起走过" desc=""/>
                <MediaItem src="" alt="" title="经典怀旧 | 哼着妈妈唱过的老歌" desc=""/>
                <MediaItem src="" alt="" title="『不悔梦归处 只恨太匆匆』" desc=""/>
              </MediaList>
            </Pane>
            <Pane title="最新音乐">
              <MediaList type="music">
                <MediaItem src="" alt="" title="网易20周年，我们与你一起走过" desc=""/>
                <MediaItem src="" alt="" title="经典怀旧 | 哼着妈妈唱过的老歌" desc=""/>
                <MediaItem src="" alt="" title="『不悔梦归处 只恨太匆匆』" desc=""/>
                <MediaItem src="" alt="" title="网易20周年，我们与你一起走过" desc=""/>
                <MediaItem src="" alt="" title="经典怀旧 | 哼着妈妈唱过的老歌" desc=""/>
                <MediaItem src="" alt="" title="『不悔梦归处 只恨太匆匆』" desc=""/>
              </MediaList>
            </Pane>
            <Pane title="推荐MV">
              <MediaList type="mv">
                <MediaItem src="http://dummyimage.com/600x400" alt="" title="歪" desc="魏如萱"/>
                <MediaItem src="http://dummyimage.com/600x400" alt="" title="给自己的信" desc="好妹妹乐队"/>
                <MediaItem src="http://dummyimage.com/600x400" alt="" title="有一点点动心" desc="张信哲/容祖儿"/>
                <MediaItem src="http://dummyimage.com/600x400" alt="" title="演员" desc="薛之谦"/>
              </MediaList>
            </Pane>
            <Pane title="精选专栏">
              <MediaList type="news">
                <MediaItem src="http://dummyimage.com/600x400" alt="" title="被“毒害”的王杰，是一个浪子与一个时代的悖论" desc="阅读 2999"/>
                <MediaItem src="http://dummyimage.com/600x400" alt="" title="那个给你带来无限欢乐的星爷，他五十五岁了" desc="阅读 32399"/>
                <MediaItem src="http://dummyimage.com/600x400" alt="" title="我愿将灵魂献给这样的魔鬼！把古典乐融入金属乐团" desc="阅读 8399"/>
              </MediaList>
            </Pane>
            <Pane title="主播电台">
              <MediaList type="music">
                <MediaItem src="" alt="" title="网易20周年，我们与你一起走过" desc=""/>
                <MediaItem src="" alt="" title="经典怀旧 | 哼着妈妈唱过的老歌" desc=""/>
                <MediaItem src="" alt="" title="『不悔梦归处 只恨太匆匆』" desc=""/>
                <MediaItem src="" alt="" title="网易20周年，我们与你一起走过" desc=""/>
                <MediaItem src="" alt="" title="经典怀旧 | 哼着妈妈唱过的老歌" desc=""/>
                <MediaItem src="" alt="" title="『不悔梦归处 只恨太匆匆』" desc=""/>
              </MediaList>
            </Pane>
          </TabPane>
          <TabPane title="歌单">

          </TabPane>
          <TabPane title="电台主播">

          </TabPane>
          <TabPane title="排行榜">

          </TabPane>
        </Tabs>
        <div style={{height: '1rem'}}></div>
        <TabBar current="home" router={router}/>
      </div>
    );
  }
}

export default Home;