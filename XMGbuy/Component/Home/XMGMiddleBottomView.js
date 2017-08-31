/**
 * Created by app on 2017/5/16.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

var HomeData4 = require('../../LocalData/XMG_Home_D4.json');
var CommonView = require('./XMGMiddleCommonView');
//创建类
var  BottomView =React.createClass ({
    render() {
        return (
            <View style={styles.container}>
                {/*上部分*/}
                <View style={styles.topViewStyle}>

                </View >
                {/*下部分*/}
                <View style={styles.bottomViewStyle}>

                    {this.renderBottomItems()}
                </View>

            </View>
        );
    },
    renderBottomItems(){
        //组件数组
        var itemArr = [];
        var  data = HomeData4.data;
        for (var i = 0;i<data.length;i++){
            var itemData = data[i];

            //创建组件装入数组
            itemArr.push(
                <CommonView
                    key = {i}
                    title= {itemData.maintitle}
                    subTitle = {itemData.deputytitle}
                    rightIcon = {this.dealWithImage(itemData.imageurl)}
                    titleColor = {itemData.typeface_color}


                />

            );
        }
        return itemArr;


    },
    dealWithImage(url){
        if (url.search('w.h')==-1){//没有找到 正常返回
            return url;
        }else {
            return url.replace('w.h','120.90');
        }

    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,

        marginTop:10
    },
    topViewStyle:{

    },
    bottomViewStyle:{
        flexDirection:'row',
        flexWrap:'wrap'

    }


});

//输出类
module.exports = BottomView;
