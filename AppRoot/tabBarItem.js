/**
 * Created by mymac on 2017/8/18.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

export default class tabBarItem extends Component {
    render() {

        const {focused, normalImage, selectedImage} = this.props;

        return (
            <Image style={style.iconStyle} source={focused ? selectedImage : normalImage}/>
        );
    }
}
const style = StyleSheet.create({
    iconStyle: {
        width: 20,
        height: 20,
        alignSelf: 'center',
    }
});
