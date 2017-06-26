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
  componentDidMount () {
    const { current, selected, changeTab } = this.props;
    if (current !== selected) {
      changeTab(current);
    }
  }

  render () {
    const { selected, router } = this.props;
    return <TabBar>
      <TabItem 
        selected={selected==='home'} 
        icon={<Icon src={homepageSvg} />}
        selectedIcon={<Icon src={homepageFillSvg} />}
        onClick={()=>router.push('/home')}
      >发现音乐</TabItem>
      <TabItem 
        selected={selected==='music'} 
        icon={<Icon src={customerserviceSvg} />}
        selectedIcon={<Icon src={customerserviceFillSvg} />}
        onClick={()=>router.push('/music')}
      >我的音乐</TabItem>
      <TabItem 
        selected={selected==='group'} 
        icon={<Icon src={groupSvg} />}
        selectedIcon={<Icon src={groupFillSvg} />}
        onClick={()=>router.push('/group')}
      >朋友</TabItem>
      <TabItem 
        selected={selected==='mine'} 
        icon={<Icon src={mineSvg} />}
        selectedIcon={<Icon src={mineFillSvg} />}
        onClick={()=>router.push('/mine')}
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