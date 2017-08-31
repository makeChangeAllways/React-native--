/**
 * Created by app on 2017/5/16.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Platform,
    TextInput,
    ScrollView
} from 'react-native';

var {width, height} = require('Dimensions').get('window');
//导入外部变量
var HomeDetail = require('./XMGHomeDetail');
var TopView  = require('./XMGTopView');
var MiddleView = require('./XMGMiddleView');
var MiddelBottomView = require('./XMGMiddleBottomView');
var ShopCenter = require('./XMGShopCenter');
var ShopCenterDetail = require('./XMGShopCenterDetailView');
var GuestYouLike = require('./XMGGuestYouLike');
var HotChannal = require('./XMGHotChannal');

//创建类
var  Home =React.createClass ({
    render() {
        return (
            <View style={styles.container}>

                {/*首页的导航*/}
                {this.renderNarBar()}

                {/*首页的主要内容*/}
                <ScrollView>

                    <TopView/>
                    {/*中间的内容*/}

                    <MiddleView/>
                    {/*下半部分*/}

                    <MiddelBottomView/>

                    {/*购物中心*/}

                    <ShopCenter

                        popToHomeView = {(url)=>this.pushToShopCenterDetail(url)}

                    />
                    {/*热门频道*/}

                    <HotChannal/>


                    {/*猜你喜欢*/}
                    <GuestYouLike/>

                </ScrollView>

            </View>
        );
    },

    pushToShopCenterDetail(url){//挑战到购物中心详情页

        //alert(url);

        this.props.navigator.push({
            component:ShopCenterDetail,//要跳转的版块
            passProps:{'url':this.dealWithUrl(url)}
        })

    },

     dealWithUrl(url){

        return url.replace('imeituan://www.meituan.com/web/?url=','');
     },

     renderNarBar(){
        return(
            <View style={styles.navBarStyle}>

                <TouchableOpacity onPress={()=>alert("当前位置南昌")}>
                  <Text style={{color:'white'}}>南昌</Text>
                </TouchableOpacity>

                <TextInput
                    placeholder='输入商家，商品，商圈'
                    style={styles.topInputStyle}
                />

                <View style={styles.rightNavViewStyle}>

                    <TouchableOpacity onPress={()=>{{alert('点击了')}}}>
                        <Image source={{uri:'icon_homepage_message'}} style={styles.navRightImgStyle}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>{alert('点击了')}}>
                        <Image source={{uri:'icon_homepage_scan'}} style={styles.navRightImgStyle} />
                    </TouchableOpacity>
                </View>

            </View>

        );

     },
    pushToDetail(){
        this.props.navigator.push({
            component:HomeDetail,//要跳转的版块
            title:"详情页"
        })
    }

});

const styles = StyleSheet.create({
    navBarStyle:{ // 导航条样式

        height: Platform.OS == 'ios' ? 64 : 44,
        backgroundColor:'rgba(25,182,158,1.0)',//'rgba(255,96,0,1.0)
        flexDirection:'row',
        alignItems:'center',   // 设置侧轴的对齐方式
        justifyContent:'space-around'

    },

    rightNavViewStyle:{
        flexDirection:'row',
        // backgroundColor:'blue',
        height:64,
        alignItems:'center'
    },

    topInputStyle:{
        width:width * 0.71,
        height:Platform.OS == 'ios' ? 35 : 30,
        backgroundColor:'white',
        marginTop: Platform.OS == 'ios' ? 18 : 0,
        borderRadius:17,
        paddingLeft:10
    },

    navRightImgStyle:{
        width:Platform.OS == 'ios' ? 28: 24,
        height:Platform.OS == 'ios' ? 28: 24
    },

    container: {
        flex: 1,
        backgroundColor: '#e8e8e8'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }

});

//输出类
module.exports = Home;
