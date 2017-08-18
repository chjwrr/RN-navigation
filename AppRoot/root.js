/**
 * Created by mymac on 2017/8/18.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {StackNavigator} from "react-navigation";

import Navigator from './natigation';

/*
 构造函数
 */
const Navigation = StackNavigator(Navigator.AppNavigationRouterConfigs, Navigator.AppNavigationStackConfigs);


class MainComponent extends Component {

    render() {
        return (
            <Navigation/>
        );
    }

}

AppRegistry.registerComponent('Navigation', () => MainComponent);


/*
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {StackNavigator, TabBarTop, TabBarBottom, TabNavigator} from "react-navigation";
import HomeScreen from "../subTabBars/select";
import NearByScreen from "../subTabBars/follow";
import MineScreen from "../subTabBars/mine";
class MainComponent extends Component {
    render() {
        return (
            <Navigator/>
        );
    }
}

const TabRouteConfigs = {
    Home: {
        screen: HomeScreen,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: '首页',
        }),
    },
    NearBy: {
        screen: NearByScreen,
        navigationOptions: {
            tabBarLabel: '附近',
        },
    }
    ,
    Mine: {
        screen: MineScreen,
        navigationOptions: {
            tabBarLabel: '我的',
        },
    }
};
const TabNavigatorConfigs = {
    initialRouteName: 'Home',
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    lazy: true,
    tabBarOptions: {}
};
const Tab = TabNavigator(TabRouteConfigs, TabNavigatorConfigs);

const StackRouteConfigs = {
    Tab: {
        screen: Tab,
    }
};
const StackNavigatorConfigs = {
    initialRouteName: 'Tab',
    navigationOptions: {
        title: '标题',
        headerStyle: {backgroundColor: '#5da8ff'},
        headerTitleStyle: {color: '#333333'},
    }
};
const Navigator = StackNavigator(StackRouteConfigs, StackNavigatorConfigs);

AppRegistry.registerComponent('Navigation', () => MainComponent);
*/