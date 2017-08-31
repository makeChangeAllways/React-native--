/**
 * Created by app on 2017/5/16.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

var CommonView = require('./XMGMiddleCommonView');
var TopData = require('../../LocalData/HomeTopMiddleLeft.json');
var {width} = require('Dimensions').get('window');

//创建类
var  MiddleView =React.createClass ({
    render() {
        return (
            <View style={styles.container}>
                {/*左边*/}

                {this.renderLeftView()}
                {/*右边*/}
                <View>
                    {this.renderRightView()}
                </View>

            </View>
        );
    },
    renderLeftView(){
        var  data = TopData.dataLeft[0];
        return(
            <TouchableOpacity onPress={()=>alert('点我干嘛！')}>
            <View style={styles.leftViewStyle}>
                <Image source={{uri:data.img1}} style = {styles.leftImageStyle} />
                <Image source={{uri:data.img2}} style = {styles.leftImageStyle} />
                <Text style = {{color:'gray'}}>{data.title}</Text>
                <View style={{flexDirection:'row',marginTop:5}}>
                    <Text style ={{color:'blue',marginRight:5}}>{data.price}</Text>
                    <Text style ={{color:'orange',backgroundColor:'yellow'}}>{data.sale}</Text>
                </View>

            </View>
            </TouchableOpacity>
        )

    },
    renderRightView(){

        var itemArr = [];
        var rightData = TopData.dataRight;

        for (var i=0;i<rightData.length;i++){

            var data = rightData[i];
            itemArr.push(

                <CommonView key = {i}

                    title= {data.title}
                    subTitle = {data.subTitle}
                    rightIcon = {data.rightImage}
                    titleColor = {data.titleColor}

                />

            );

        }
        return itemArr;
    }
});

const styles = StyleSheet.create({
    container: {
       marginTop:15,
        flexDirection:'row'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    leftImageStyle:{
        width:120,
        height:30,
        resizeMode:'contain'

    },

    leftViewStyle:{
        width:width*0.5,
        height:119,
        backgroundColor:'white',
        marginRight:1,
        alignItems:'center',
        justifyContent:'center'

    }

});

//输出类
module.exports = MiddleView;
