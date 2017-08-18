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
    TouchableOpacity,
} from 'react-native';

export default class select extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    精选
                </Text>

                <TouchableOpacity style={{marginTop: 20}} onPress={()=>{

                    // 传递参数，及 回调函数
                    navigate('First', {params: '你好第一页', callBack:(value)=>{
                        console.log(value);
                    }});
                }}>
                    <Text style={styles.welcome}>
                        点击跳转到第一个页面
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

