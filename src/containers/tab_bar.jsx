import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from '../components/icon';
import TabBar from '../components/tab_bar';
import { changeTabAction } from '../actions';

import homepageSvg from '../icons/homepage.svg';
import homepageFillSvg from '../icons/homepage_fill.svg';
import customerserviceSvg from '../icons/customerservice.svg';
import customerserviceFillSvg from '../icons/customerservice_fill.svg';
import groupSvg from '../icons/group.svg';
import groupFillSvg from '../icons/group_fill.svg';
import mineSvg from '../icons/mine.svg';
import mineFillSvg from '../icons/mine_fill.svg';

const TabItem = TabBar.TabItem;

class TabBarWarp extends Component {

  onClick = (tab) => {
    const { selected, changeTab, router } = this.props;
    if (tab !== selected) {
      changeTab(tab);
      router.push(`/${tab}`);
    }
  }

  render () {
    const selected = this.props.selected;
    return <TabBar hide={!selected}>
      <TabItem 
        selected={selected==='home'} 
        icon={<Icon src={homepageSvg} />}
        selectedIcon={<Icon src={homepageFillSvg} />}
        onClick={()=>this.onClick('home')}
      >发现音乐</TabItem>
      <TabItem 
        selected={selected==='music'} 
        icon={<Icon src={customerserviceSvg} />}
        selectedIcon={<Icon src={customerserviceFillSvg} />}
        onClick={()=>this.onClick('music')}
      >我的音乐</TabItem>
      <TabItem 
        selected={selected==='group'} 
        icon={<Icon src={groupSvg} />}
        selectedIcon={<Icon src={groupFillSvg} />}
        onClick={()=>this.onClick('group')}
      >朋友</TabItem>
      <TabItem 
        selected={selected==='mine'} 
        icon={<Icon src={mineSvg} />}
        selectedIcon={<Icon src={mineFillSvg} />}
        onClick={()=>this.onClick('mine')}
      >账号</TabItem>
    </TabBar>
  }
}

export default connect(
  state => ({
    selected: state.selectedTab
  }),
  dispatch => ({
    changeTab: (tab) => dispatch(changeTabAction(tab))
  })
)(TabBarWarp)