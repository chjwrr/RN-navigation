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

export default class thirdCtrl extends Component {
    render() {
        const {params} = this.props.navigation.state;

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    上一个页面给当前页传值为：{params.params}
                </Text>
                <TouchableOpacity style={{marginTop: 100}} onPress={()=>{

                }}>
                    <Text style={styles.welcome}>
                        点击返回第二页，并传值："第三页向第二页传值-hello"
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

