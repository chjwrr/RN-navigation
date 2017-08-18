/**
 * Created by mymac on 2017/8/18.
 */

import React, { Component } from 'react';

import {TabBarBottom} from "react-navigation";

import Home from '../subTabBars/select';
import Follow from '../subTabBars/follow';
import Explor from '../subTabBars/explor';
import Mine from '../subTabBars/mine';

/*自定义的 tabBar 图片 view*/
import TabBarItem from './tabBarItem';
/*
    创建下面的四个 tabar
*/
const AppRootTabBarRouteConfigs = {
    Home:{
        screen: Home,
        navigationOptions: {
            tabBarLabel: '首页',
            tabBarIcon: ({focused, tintColor}) => (
                <TabBarItem
                    focused={focused}
                    normalImage={require('../images/select.png')}
                    selectedImage={require('../images/select_select.png')}
                />
            ),
        }
    },
    Follow:{
        screen: Follow,
        navigationOptions: {
            tabBarLabel: '关注',
            tabBarIcon: ({focused, tintColor}) => (
                <TabBarItem
                    focused={focused}
                    normalImage={require('../images/follow_follow.png')}
                    selectedImage={require('../images/follow_follow_select.png')}
                />
            ),
        }
    },
    Explor:{
        screen: Explor,
        navigationOptions: {
            tabBarLabel: '发现',
            tabBarIcon: ({focused, tintColor}) => (
                <TabBarItem
                    focused={focused}
                    normalImage={require('../images/explor_explor.png')}
                    selectedImage={require('../images/explor_explor_select.png')}
                />
            ),
        }
    },
    Mine:{
        screen: Mine,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({focused, tintColor}) => (
                <TabBarItem
                    focused={focused}
                    normalImage={require('../images/mine_mine.png')}
                    selectedImage={require('../images/mine_mine_select.png')}
                />
            ),
        }
    },
};

/*
 tabBarComponent - Tab选项卡组件，有 TabBarBottom 和 TabBarTop 两个值，在iOS中默认为 TabBarBottom ，在Android中默认为 TabBarTop 。
 TabBarTop - 在页面的顶部
 TabBarBottom - 在页面的底部
 tabBarPosition - Tab选项卡的位置，有 top 或 bottom 两个值
 swipeEnabled - 是否可以滑动切换Tab选项卡
 animationEnabled - 点击Tab选项卡切换界面是否需要动画
 lazy - 是否懒加载页面
 initialRouteName - 初始显示的Tab对应的页面路由名称
 order - 用路由名称数组来表示Tab选项卡的顺序，默认为路由配置顺序
 paths - 路径配置
 backBehavior - androd点击返回键时的处理，有 initialRoute 和 none 两个值
 initailRoute - 返回初始界面
 none - 退出

 tabBarOptions - Tab配置属性，用在 TabBarTop 和 TabBarBottom 时有些属性不一致：

     用于 TabBarTop 时：
         activeTintColor - 选中的文字颜色
         inactiveTintColor - 未选中的文字颜色
         showIcon - 是否显示图标，默认显示
         showLabel - 是否显示标签，默认显示
         upperCaseLabel - 是否使用大写字母，默认使用
         pressColor - android 5.0以上的MD风格波纹颜色
         pressOpacity - android 5.0以下或者iOS按下的透明度
         scrollEnabled - 是否可以滚动
         tabStyle - 单个Tab的样式
         indicatorStyle - 指示器的样式
         labelStyle - 标签的样式
         iconStyle - icon的样式
         style - 整个TabBar的样式

     用于 TabBarBottom 时：
         activeTintColor - 选中Tab的文字颜色
         activeBackgroundColor - 选中Tab的背景颜色
         inactiveTintColor - 未选中Tab的的文字颜色
         inactiveBackgroundColor - 未选中Tab的背景颜色
         showLabel - 是否显示标题，默认显示
         style - 整个TabBar的样式
         labelStyle - 标签的样式
         tabStyle - 单个Tab的样式
 */

/*
 TabBarTop:
    indicatorStyle: {height: 0}, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了， 不知道还有没有其它方法隐藏？？？
    showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
 */

const AppRootTabBarNavigatorConfigs = {
    initialRouteName: 'Home',
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    lazy: true,
    tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor: 'black',
        showLabel: true,
        style:{
            backgroundColor: 'yellow',
        },
        labelStyle: {
            fontWeight: 'bold',
            fontSize: 12,
        },
    }
};

export default {
    AppRootTabBarRouteConfigs,
    AppRootTabBarNavigatorConfigs
};


/* 在此直接导出 Tab ,在 navigation 里面是得不到的，只有在 navigation 里面 调用构造方法*/
/*
 构造函数
 export default Tab = TabNavigator(AppTab.AppRootTabBarRouteConfigs, AppTab.AppRootTabBarNavigatorConfigs);
 */


