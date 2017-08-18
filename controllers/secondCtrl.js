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

export default class secondCtrl extends Component {
    render() {
        const {navigate} = this.props.navigation;
        const {params} = this.props.navigation.state;

        return (

            <View style={styles.container}>
                <Text style={styles.welcome}>
                    上一个页面给当前页传值为：{params.params}
                </Text>
                <TouchableOpacity style={{marginTop: 20}} onPress={()=>{
                    navigate('Third', {params: '你好第三页'})
                }}>
                    <Text style={styles.welcome}>
                        点击跳转到第三个页面
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop: 100}} onPress={()=>{

                }}>
                    <Text style={styles.welcome}>
                        点击返回第一页，并传值："第二页向第一页传值-world"
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

