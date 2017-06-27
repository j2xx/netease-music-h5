import React, { Component } from 'react';
import SearchBar from '../components/search_bar';
import Tabs from '../components/tabs';
import Pane from '../components/pane';
import MediaList from '../components/media_list';
import TopList from '../components/top_list';
import Slider from '../components/slider';
import Icon from '../components/icon';
import Button from '../components/button';

import TabBar from '../containers/tab_bar';

import videoSvg from '../icons/video.svg';
import remindSvg from '../icons/remind.svg';
import stealthSvg from '../icons/stealth.svg';
import enterSvg from '../icons/enter.svg';
import manageSvg from '../icons/manage.svg';
import createtaskSvg from '../icons/createtask.svg';


const TabPane = Tabs.TabPane;
const MediaItem = MediaList.MediaItem;

class Home extends Component {

  render () {
    const { router } = this.props;
    return (
      <div className="home">
        <SearchBar />
        <div style={{height: '.9rem'}} />
        <Tabs active="home">
          <TabPane key="home" title="个性推荐">

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
          <TabPane key="music" title="歌单">

            <Slider />
            <div className="flex-container menu menu-md">
              <div>
                <Button type="ghost" circle inline>全部歌单<Icon src={enterSvg} size=".3"/></Button>
              </div>
              <div className="flex-container flex-right">
                <div className="flex-container line-right">
                  华语
                </div>
                <div className="flex-container line-right">
                  民谣
                </div>
                <div className="flex-container">
                  电子
                </div>
              </div>
            </div>
            <MediaList type="mv">
              <MediaItem src="http://dummyimage.com/600x600" alt="" title="国风电音||一曲登仙_西洋人的中华古韵"/>
              <MediaItem src="http://dummyimage.com/600x600" alt="" title="『电影杀手』刀尖上行走，子弹亦跳舞"/>
              <MediaItem src="http://dummyimage.com/600x600" alt="" title="德国的先锋音乐：泡菜摇滚Krautrock"/>
              <MediaItem src="http://dummyimage.com/600x600" alt="" title="PB R&B 灌入色彩的迷离嗓音"/>
              <MediaItem src="http://dummyimage.com/600x600" alt="" title="国风电音||一曲登仙_西洋人的中华古韵"/>
              <MediaItem src="http://dummyimage.com/600x600" alt="" title="『电影杀手』刀尖上行走，子弹亦跳舞"/>
              <MediaItem src="http://dummyimage.com/600x600" alt="" title="德国的先锋音乐：泡菜摇滚Krautrock"/>
              <MediaItem src="http://dummyimage.com/600x600" alt="" title="PB R&B 灌入色彩的迷离嗓音"/>
              <MediaItem src="http://dummyimage.com/600x600" alt="" title="国风电音||一曲登仙_西洋人的中华古韵"/>
              <MediaItem src="http://dummyimage.com/600x600" alt="" title="『电影杀手』刀尖上行走，子弹亦跳舞"/>
              <MediaItem src="http://dummyimage.com/600x600" alt="" title="德国的先锋音乐：泡菜摇滚Krautrock"/>
              <MediaItem src="http://dummyimage.com/600x600" alt="" title="PB R&B 灌入色彩的迷离嗓音"/>
              <MediaItem src="http://dummyimage.com/600x600" alt="" title="国风电音||一曲登仙_西洋人的中华古韵"/>
              <MediaItem src="http://dummyimage.com/600x600" alt="" title="『电影杀手』刀尖上行走，子弹亦跳舞"/>
              <MediaItem src="http://dummyimage.com/600x600" alt="" title="德国的先锋音乐：泡菜摇滚Krautrock"/>
              <MediaItem src="http://dummyimage.com/600x600" alt="" title="PB R&B 灌入色彩的迷离嗓音"/>
            </MediaList>
          </TabPane>
          <TabPane key="fm" title="电台主播">

            <Slider />

            <div className="flex-container menu menu-lg">
              <div className="flex-container line-right">
                <Icon src={manageSvg} size=".88"/>
                电台分类
              </div>
              <div className="flex-container">
                <Icon src={createtaskSvg} size=".88"/>
                电台排行
              </div>
            </div>
            <Pane title="电台个性推荐">
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
          <TabPane key="top" title="排行榜">
            <TopList thumb="http://dummyimage.com/300x300">
              <span>演员 - 薛之谦</span>
              <span>安和桥 - 宋冬野</span>
              <span>十年 - 陈奕迅</span>
            </TopList>
            <div style={{height: '0.05rem'}}></div>
            <TopList thumb="http://dummyimage.com/300x300">
              <span>演员 - 薛之谦</span>
              <span>安和桥 - 宋冬野</span>
              <span>十年 - 陈奕迅</span>
            </TopList>
            <div style={{height: '0.05rem'}}></div>
            <TopList thumb="http://dummyimage.com/300x300">
              <span>演员 - 薛之谦</span>
              <span>安和桥 - 宋冬野</span>
              <span>十年 - 陈奕迅</span>
            </TopList>
            <div style={{height: '0.05rem'}}></div>
            <TopList thumb="http://dummyimage.com/300x300">
              <span>演员 - 薛之谦</span>
              <span>安和桥 - 宋冬野</span>
              <span>十年 - 陈奕迅</span>
            </TopList>
            <div style={{height: '0.05rem'}}></div>
            <TopList thumb="http://dummyimage.com/300x300">
              <span>演员 - 薛之谦</span>
              <span>安和桥 - 宋冬野</span>
              <span>十年 - 陈奕迅</span>
            </TopList>
            <Pane title="全球榜">
              <MediaList type="music">
                <MediaItem src="" alt="" title="网易20周年，我们与你一起走过" desc=""/>
                <MediaItem src="" alt="" title="经典怀旧 | 哼着妈妈唱过的老歌" desc=""/>
                <MediaItem src="" alt="" title="『不悔梦归处 只恨太匆匆』" desc=""/>
                <MediaItem src="" alt="" title="网易20周年，我们与你一起走过" desc=""/>
                <MediaItem src="" alt="" title="经典怀旧 | 哼着妈妈唱过的老歌" desc=""/>
                <MediaItem src="" alt="" title="『不悔梦归处 只恨太匆匆』" desc=""/>
              </MediaList>
            </Pane>
            <Pane title="用户榜">
              <MediaList type="music">
                <MediaItem src="" alt="" title="音乐达人榜" desc=""/>
                <MediaItem src="" alt="" title="音乐新人榜" desc=""/>
              </MediaList>
            </Pane>
          </TabPane>
        </Tabs>
        <div style={{height: '1rem'}}></div>
        <TabBar current="home" router={router}/>
      </div>
    );
  }
}

export default Home;