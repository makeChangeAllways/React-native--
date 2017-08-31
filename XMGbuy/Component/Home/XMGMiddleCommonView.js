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

var {width} = require('Dimensions').get('window');

//创建类
var  CommonView =React.createClass ({

    getDefaultProps(){
        return{
            title:'',
            subTitle:'',
            rightIcon:'',
            titleColor:'',
            tplurl:'',//下级界面跳转的url路径
            callBackClickCell:null
        }
    },

    render() {
        return (

            <TouchableOpacity onPress={()=>this.clickCell(this.props.tplurl)}>
            <View style={styles.container}>
                <View>
                    <Text style = {[{color:this.props.titleColor},styles.titleStyle]}>{this.props.title}</Text>
                    <Text style = {styles.subTitleStyle}>{this.props.subTitle}</Text>
                </View>
                <Image source={{uri:this.props.rightIcon}} style={{width:64,height:43,resizeMode:'contain'}}/>

            </View>
            </TouchableOpacity>
        );
    },
    clickCell(url){

    }
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width:width*0.5-1,
        height:59,
        flexDirection:'row',
        marginBottom:1,
        marginRight:1,
        alignItems:'center',
        justifyContent:'space-around'
    },
    titleStyle:{
        fontWeight:'bold',
        fontSize:18

    },
    subTitleStyle:{
        color:'gray'
    }

});

//输出类
module.exports = CommonView;
