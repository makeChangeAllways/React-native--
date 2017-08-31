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

//创建类
var  BottomCommonCell =React.createClass ({
    getDefaultProps(){
      return{
          leftIocn:'',
          leftTitle:'',
          rightTile:''
      }
    },
    render() {
        return (
            <TouchableOpacity onPress={()=>alert(this.props.leftTitle)}>
            <View style={styles.container}>
                {/*/左边*/}
                <View style={styles.leftViewStyle}>

                    <Image source={{uri:this.props.leftIocn}} style={{width:23,height:23, marginRight:5}} />
                    <Text style={{fontSize:17}}>{this.props.leftTitle}</Text>

                </View>
                {/*右边*/}
                <View style={styles.rightViewStyle}>
                    <Text style={{color:'gray'}}>{this.props.rightTile}</Text>
                    <Image source={{uri:'icon_cell_rightArrow'}} style={{width:8, height:13, marginRight:8, marginLeft:5}}/>

                </View>


            </View>
            </TouchableOpacity>
        );
    },

});

const styles = StyleSheet.create({
    container: {
        height:44,
        flexDirection:'row',
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'space-between',

        //这只下边框
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5

    },
    leftViewStyle:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:8

    },
    rightViewStyle:{
        flexDirection:'row',
        alignItems:'center'
    }


});

//输出类
module.exports = BottomCommonCell;
