/**
 * Created by mymac on 2017/8/18.
 */
/**
 * Created by mymac on 2017/8/18.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default class firstCtrl extends Component {

    /*
     title - 可以作为头部标题 headerTitle ，或者Tab标题 tabBarLabel
     header - 自定义的头部组件，使用该属性后系统的头部组件会消失
     headerTitle - 头部的标题，即页面的标题
     headerBackTitle - 返回标题，默认为 title
     headerTruncatedBackTitle - 返回标题不能显示时（比如返回标题太长了）显示此标题，默认为 “Back”
     headerRight - 头部右边组件
     headerLeft - 头部左边组件
     headerStyle - 头部组件的样式
     headerTitleStyle - 头部标题的样式
     headerBackTitleStyle - 头部返回标题的样式
     headerTintColor - 头部标题颜色
     headerPressColorAndroid - Android 5.0 以上MD风格的波纹颜色
     gesturesEnabled - 否能侧滑返回， iOS 默认 true ， Android 默认 false
     */
    static navigationOptions = {
        title:'第一个页面自定义标题',
        headerRight: (
            <Text>right</Text>
        ),
        //headerLeft: null, 没有返回按钮
        headerTintColor: 'red',
        // header:null, // 隐藏 导航条
    };

    render() {
        const {navigate} = this.props.navigation;
        // 收到的参数
        const {params} = this.props.navigation.state;

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    上一个页面给当前页传值为：{params.params}
                </Text>
                <TouchableOpacity style={{marginTop: 20}} onPress={()=>{

                    navigate('Second', {params: '你好第二页'});

                }}>
                    <Text style={styles.welcome}>
                        点击跳转到第二个页面
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{marginTop: 100}} onPress={()=>{
                    //回调函数
                    params.callBack('123456789');

                    this.props.navigation.goBack();

                }}>
                    <Text style={styles.welcome}>
                        点击返回首页，并传值："hello world"
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});

