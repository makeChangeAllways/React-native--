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
    ListView,
    TouchableOpacity,
    Platform
} from 'react-native';

//全局变量
var clos = 5;
var cellH = Platform.OS =='ios' ? 70:60;
var cellW = 70;
var vMarign = (width-cellW*clos)/(clos+1);

var {width} = require('Dimensions').get('window');
//创建类
var TopListView =React.createClass ({

    getDefaultProps(){
        return{
            dataArray:''
        }
    },
    getInitialState(){

        var ds = new ListView.DataSource({rowHasChanged:(row1, row2) => row1 !== row2});

        return{
            dataSource: ds.cloneWithRows(this.props.dataArray),
        }
    },

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}//具体的每一个listview
                contentContainerStyle={styles.contentViewStyle}
                scrollEnabled={false}
                />
        );
    },

    renderRow(rowdata){
        return(

            <TouchableOpacity onPress={()=>alert(rowdata.title)}>
                <View style={styles.cellViewStyle}>
                    <Image source={{uri:rowdata.image}} style = {{width:52,height:52}}/>
                    <Text style={styles.titleViewStyle}>{rowdata.title}</Text>
                </View>

            </TouchableOpacity>
        )

    }
});

const styles = StyleSheet.create({
    contentViewStyle:{
        //多个cell在同一行显示 关键
        flexWrap:'wrap',
        flexDirection:'row',
        width:width
    },
    cellViewStyle:{
        //backgroundColor:'red',
        width:cellW,
        height:cellH,
        //水平和垂直居中
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        marginLeft:vMarign,
    },
    titleViewStyle:{
        fontSize:Platform.OS =='ios' ?13:12
    }

});

//输出类
module.exports = TopListView;
