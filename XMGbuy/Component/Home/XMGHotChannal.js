/**
 * Created by app on 2017/6/5.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    ListView,
    Image,
    TouchableOpacity
} from 'react-native';

var {width} = require('Dimensions').get('window');
var CommonCell = require('./XMGBottomCommonCell');
var Home_D6 = require('../../LocalData/XMG_Home_D6.json');
var HomeHotData = require('../../LocalData/HomeHotData.json');

var  HotChannal =React.createClass ({

    render() {
        return (
            <View style={styles.container}>
            {/*上部分*/}
                <CommonCell
                    leftIocn ='rm'
                    leftTitle = '热门频道'
                    rightTile ='查看全部'
                />
                {/*下部分*/}
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {this.renderHotItems()}
                </ScrollView>
                <View style={styles.bottomViewStyle}>

                    {this.renderHotBottomItems()}
                </View>

            </View>
        );
    },
    renderHotBottomItems(){
        //定义组件数组
        var ItemsArr = [];
        var HotData = HomeHotData.bottomData;

        for (var i= 0;i<HotData.length;i++){
            var data = HotData[i];
            ItemsArr.push(
                <HotBottomItems
                    title ={data.title}
                    subTitle = {data.subTitle}
                    hotImg = {data.hotImage}
                    key={i}
                />
            )
        }
        return ItemsArr;
    },

    renderHotItems(){

        //定义组件数组
        var ItemsArr = [];
        var HotData = Home_D6.data[0].resource.cateArea;

        for (var i= 0;i<HotData.length;i++){
            var data = HotData[i];
            ItemsArr.push(
                <HotItems
                    title ={data.mainTitle}
                    subTitle = {data.deputyTitle}
                    hotImg = {data.entranceImgUrl}
                    key={i}
                />
            )
        }
        return ItemsArr;
    }
});

var HotItems = React.createClass({

    getDefaultProps(){
        return{
            title:'',
            subTitle:'',
            hotImg:''
        }
    },
    render(){

        return(
            <TouchableOpacity onPress={()=>alert(this.props.title)}>
            <View style={styles.HotViewStyle}>
                {/*左边*/}
                <View style={styles.leftViewStyle}>

                    <Text style={{fontSize:15}}>{this.props.title}</Text>
                    <Text style={{fontSize:12,color:'gray',marginTop:5}}>{this.props.subTitle}</Text>
                    <Image source={{uri:'icon_hot'}} style={{width:44,height:23,resizeMode:'contain', marginTop:5}}/>

                </View>
                 {/*右边*/}
                <View>
                    <Image source={{uri:this.dealWithImage(this.props.hotImg)}} style={{width:width==320 ? 70:90,height:60,resizeMode:'contain'}}/>
                </View>

            </View>
            </TouchableOpacity>
        )
    },

    dealWithImage(url){

        if(url.search('w.h')==-1){

           return  url;
        }else {

            return url.replace('w.h','90.60');
        }
    }
});

var HotBottomItems = React.createClass({
    getDefaultProps(){
        return{
            title:'',
            subTitle:'',
            hotImg:''
        }
    },
    render(){
        return(
            <TouchableOpacity onPress={()=>alert(this.props.title)}>
            <View style={styles.bottomHotViewStyle}>
                <Text style={{fontSize:15}}>{this.props.title}</Text>
                <Text style={{fontSize:12,color:'gray',marginTop:5}}>{this.props.subTitle}</Text>
                <Image source={{uri:this.props.hotImg}} style ={{width:width*0.25-9,height:60,resizeMode:'contain',marginTop:5}}/>

            </View>
            </TouchableOpacity>

        )
    }

});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:10,
        backgroundColor:'white'
    },

    HotViewStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'rgba(245,246,247,1.0)',
        marginLeft:7,
        width:width*0.5-10,
        height:80,
        padding:10
    },
    leftViewStyle:{
        justifyContent:'center',
        alignItems:'center'

    },
    bottomViewStyle:{
        flexDirection:'row',
        marginTop:7,
        backgroundColor:'white',

    },
    bottomHotViewStyle:{
        width:width*0.25-9,
        height:125,
        backgroundColor:'rgba(245,246,247,1.0)',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:7,
        marginBottom:7

    }


});

//输出类
module.exports = HotChannal;