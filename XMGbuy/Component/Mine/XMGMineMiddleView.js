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

var  MiddleData = require('./MiddleData.json');
//创建类
var  MiddleView =React.createClass ({
    render() {
        return (
            <View style={styles.container}>

                {this.renderAllItems()}

            </View>
        );
    },

    renderAllItems(){

        var  item = [];

       for (var i = 0;i<MiddleData.length;i++) {
           var data = MiddleData[i];

           item.push(

               <InnerView key={i} iconName={data.iconName} title={data.title}/>
           );
         }

         return item;
       }

});

var InnerView = React.createClass({

    getDefaultProps(){
        return{
            iconName:'',
            title:''
        }
    },

    render(){
        return(
            <TouchableOpacity activeOpacity={0.5} onPress={()=>{alert('0')}}>

                <View style={styles.innerViewStyle}>

                    <Image source={{uri:this.props.iconName}} style = {{width:40,height:40, marginBottom:3}}/>
                    <Text style={{color:"gray"}}>{this.props.title}</Text>

                </View>
            </TouchableOpacity>

        );
    }
});

const styles = StyleSheet.create({
    container: {
        // 设置主轴的方向
        flexDirection:'row',
        alignItems: 'center',
        backgroundColor: 'white',
        // 设置主轴的对齐方式
        justifyContent:'space-around'
    },

    innerViewStyle:{
        width:70,
        height:70,
        // 水平和垂直居中
        justifyContent:'center',
        alignItems:'center'
    }

});

//输出类
module.exports = MiddleView;
