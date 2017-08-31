/**
 * Created by app on 2017/5/16.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image
} from 'react-native';

var CommonCell = require('./XMGBottomCommonCell');
var Home_D5 = require('../../LocalData/XMG_Home_D5.json');
//创建类
var  ShopCenter =React.createClass ({

    getDefaultProps(){
        return{

            popToHomeView:null//回调函数

        }
    },

    render() {
        return (

            <View style={styles.container}>
                {/*上部分*/}
               <CommonCell
                   leftIocn ='gw'
                   leftTitle = '购物中心'
                   rightTile ={Home_D5.tips}
               />
                {/*下部分*/}
                <ScrollView style={styles.scrollViewStyle}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                >
                    {this.renderAllItems()}
                    
                </ScrollView>

            </View>
        );
    },

    renderAllItems(){
        //定义组件数组
        var itemArr = [];
        var shopData = Home_D5.data;

        for (var i = 0;i<shopData.length;i++){
            var data = shopData[i];

            itemArr.push(
                <ShopCenterItem
                    key = {i}
                    shopImage = {data.img}
                    shopSale = {data.showtext.text}
                    shopName ={data.name}
                    detailUrl = {data.detailurl}
                    popTopShopCenter = {(url)=>this.popToHome(url)}
                />

            );
          }
       return itemArr;
    },
    popToHome(url){
// 判断
        if (this.props.popToHomeView == null) return;
        // 执行回调函数
        this.props.popToHomeView(url);

    }

});


//每一个商场
var ShopCenterItem = React.createClass({

    getDefaultProps(){
        return{
            shopImage:'',
            shopSale:'',
            shopName:'',
            detailUrl:'',
            popTopShopCenter:null//回调函数
        }
    },
    render(){
        return(
        <TouchableOpacity onPress={()=>this.clickItem(this.props.detailUrl)}>
            <View style={styles.itemViewStyle}>
                <Image source={{uri:this.props.shopImage}} style = {styles.imageStyles}/>
                <Text style={styles.shopSaleStyle}>{this.props.shopSale}</Text>
                <Text style={{textAlign:'center', marginTop:5}}>{this.props.shopName}</Text>
            </View>

        </TouchableOpacity>

        );
    },

    clickItem(url){
        // 判断
        if (this.props.detailUrl == null) return;
        // 执行回调函数
        this.props.popTopShopCenter(url);
    }


});

const styles = StyleSheet.create({
    container: {

        marginTop:10
    },
    imageStyles:{
        width:120,
        height:100,
        borderRadius:8

    },
    scrollViewStyle:{
        flexDirection:'row',
        backgroundColor:'white',
        padding:10


    },
    itemViewStyle:{
        margin:8
    },
    shopSaleStyle:{
        position:'absolute',
        left:0,
        bottom:30,
        backgroundColor:'red',
        color:'white',
        padding:2

    }

});

//输出类
module.exports = ShopCenter;
