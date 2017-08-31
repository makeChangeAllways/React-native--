/**
 * Created by app on 2017/5/16.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

//创建类
var  HomeDetail =React.createClass ({
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>{this.popToHome()}}>
                <Text style={styles.welcome}>
                    测试跳转
                </Text>
                </TouchableOpacity>
            </View>
        );
    },
    popToHome(){
        this.props.navigator.pop();
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

});

//输出类
module.exports = HomeDetail;
