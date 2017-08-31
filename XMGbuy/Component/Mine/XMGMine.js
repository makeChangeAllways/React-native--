/**
 * Created by app on 2017/5/16.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';

var MyCell = require('./XMGCommonMyCell');
var MiddelView = require('./XMGMineMiddleView');
var HeaderView = require('./XMGMineHeaderView');
//创建类
var  Mine =React.createClass ({

    render() {
        return (
           <ScrollView style={styles.scrollviewStyle}
                       contentInset = {{top: -200}}
                       contentOffset  ={{y:200}}
           >

               <HeaderView/>

               <View>
                   <MyCell
                       leftIconName="collect"
                       leftTitle="我的订单"
                       rightTitle="查看全部订单"
                   />
                   <MiddelView />
               </View>

               <View style={{marginTop:20}}>

                   <MyCell
                       leftIconName = "draft"
                       leftTitle = "美团钱包"
                       rightTitle = "账户余额:$100"
                   />

                   <MyCell
                       leftIconName = "like"
                       leftTitle = "抵用券"
                       rightTitle = "10张"

                   />
               </View>
               <View style={{marginTop:20}}>
                   <MyCell
                       leftIconName = "card"
                       leftTitle = "积分商城"
                   />

               </View>
               <View style={{marginTop:20}}>
                   <MyCell
                       leftIconName = "new_friend"
                       leftTitle = "今日推荐"
                       rightIconName = "me_new"
                   />
               </View>
               <View style={{marginTop:20}}>
                   <MyCell
                       leftIconName = "pay"
                       leftTitle = "我要合作"
                       rightTitle = "轻松开店，招财进宝"

                   />
               </View>
           </ScrollView>
        );
    }
});

const styles = StyleSheet.create({
    scrollviewStyle:{
        backgroundColor:'#e8e8e8'
    },

});

//输出类
module.exports = Mine;
