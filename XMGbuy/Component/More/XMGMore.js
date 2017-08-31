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
    TouchableOpacity,
    Platform,
    ScrollView
} from 'react-native';

var CommonCell = require('./XMGCommonCell');

//创建类
var  More =React.createClass ({
    render() {
        return (
            <View style={styles.container}>
                {this.renderNavBar()}
               <ScrollView>
                   <View style={{marginTop:20}}>
                       <CommonCell
                           title="扫一扫"

                       />
                   </View>
                   <View style={{marginTop:20}}>
                       <CommonCell
                           title="省流量模式"
                           isSwitch = {true}
                       />
                       <CommonCell
                           title="消息提醒"
                       />
                       <CommonCell
                           title="邀请好友使用美团"
                       />
                       <CommonCell
                           title="清空缓存"
                           rightTitle = "200M"
                       />
                   </View>

                   <View style={{marginTop:20}}>
                       <CommonCell
                           title="意见反馈"
                       />
                       <CommonCell
                           title="问卷调差"
                       />
                       <CommonCell
                           title="支付帮助"
                       />
                       <CommonCell
                           title="网络诊断"
                       />
                       <CommonCell
                           title="关于美团"
                       />
                       <CommonCell
                           title="我要应聘"
                       />
                   </View>
                   <View style={{marginTop:20}}>
                       <CommonCell
                           title="精品应用"
                       />

                   </View>
               </ScrollView>

            </View>
        );
    },
    renderNavBar(){
        return(
            <View style={styles.navOutViewStyle}>
                <Text style={{color:'white',fontSize:16,fontWeight:'bold'}}>更多</Text>

                <TouchableOpacity onPress={()=>{alert('点击了')}} style={styles.rightOutViewStyle}>

                    <Image source={{uri:'icon_mine_setting'}} style={styles.navImageStyle}/>
                </TouchableOpacity>
            </View>
        )
    },
});

const styles = StyleSheet.create({
    container: {
         flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#e8e8e8e8',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 15,
    },
    navImageStyle:{
        width:Platform.OS == 'ios' ? 28: 24,
        height:Platform.OS == 'ios' ? 28: 24,


    },

    navOutViewStyle:{
        height: Platform.OS == 'ios' ? 64 : 44,
        backgroundColor:'rgba(25,182,158,1.0)',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    rightOutViewStyle:{
        position:'absolute',
        right:10

    }

});

//输出类
module.exports = More;
