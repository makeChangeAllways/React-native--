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
    ListView,
    Image
} from 'react-native';

var {width} = require('Dimensions').get('window');
var TopMenu = require('../../LocalData/TopMenu.json');
var TopListView = require('./XMGTopListView');

//创建类
var  TopView =React.createClass ({

    getInitialState(){
        return{
            activePage:0
        }
    },

    render() {
        return (
            <View style={styles.container}>
                {/*内容部分*/}
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd = {this.onScrollAnimationEnd}

                >

                    {this.renderScrollItem()}

                </ScrollView>
                {/*页码部分*/}
                <View style={styles.indicatorViewStyle}>
                    {this.renderIndicator()}

                </View>

            </View>
        );
    },
    onScrollAnimationEnd(e){

       var currenPage = Math.floor(e.nativeEvent.contentOffset.x/width);//取整

       this.setState({
           activePage:currenPage
       });

    },

    renderScrollItem(){

        //ScrollView内部组件
        var itemArr = [];
        //颜色数组换成 数据数组
        var dataArr = TopMenu.data;
        for (var i = 0; i < dataArr.length; i++) {

            itemArr.push(
                <TopListView key = {i}
                    dataArray = {dataArr[i]}
                />
            );
        }
        return itemArr;

    },
    renderIndicator(){

        var indicatorArr = [];
        for (var i = 0; i < 2; i++) {

            style = (i==this.state.activePage) ?{color:'orange'}:{color:'gray'}
            indicatorArr.push(

                <Text key={i} style={[{fontSize:25},style]}>&bull;</Text>

            );

        }

        return indicatorArr;
    }


});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    indicatorViewStyle:{
        flexDirection:'row',
        justifyContent :'center'
    }

});

//输出类
module.exports = TopView;
