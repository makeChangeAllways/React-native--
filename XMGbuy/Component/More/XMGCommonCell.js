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
    Platform,
    TouchableOpacity,
    Switch,
    Alert
} from 'react-native';

//创建类
var  CommonCell =React.createClass ({

    getDefaultProps(){
        return{
            title:'',
            isSwitch:false,//是否显示开关
            rightTitle:''
        }
    },

    getInitialState(){
        return{
            isOn:false//默认开关是关的状态
        }
    },

    render() {
        return (
            //<TouchableOpacity onPress={()=>{alert(this.props.title)}}>
            <TouchableOpacity
                                onPress={() => Alert.alert(
                                    this.props.title,
                                    null,
                                    [
                                        {text: '取消'},
                                        {text: '确定'},
                                    ]
                                )}>

            <View style={styles.container}>

                <Text style ={{marginLeft:8}}>{this.props.title}</Text>
                {this.renderRightView()}
            </View>
            </TouchableOpacity>
        );
    },
    renderRightView(){

        if (this.props.isSwitch){
            return(
                <Switch value={this.state.isOn == true} onValueChange={()=>{this.setState({isOn:!this.state.isOn})}} style={{marginRight:8}}/>
            );

        }else {
            return(
                <View style={{flexDirection:'row',alignItems:'center'}}>

                    {this.renderRightTitle()}
                    <Image source={{uri:'icon_cell_rightArrow'}} style={{width:8,height:13,marginRight:8}}/>
                </View>
            );
        }

    },

    renderRightTitle(){
        if (this.props.rightTitle.length>0){
            return(
                <Text style = {{color:'gray',marginRight:3}}>{this.props.rightTitle}</Text>
            )
        }
    }
});

const styles = StyleSheet.create({
    container: {
        height:Platform.OS==='ios' ?40:30,
        backgroundColor:'white',
        borderBottomColor:'#dddddd',
        borderBottomWidth:0.5,
        flexDirection:'row',
        justifyContent:'space-between',//主轴两端对齐
        alignItems:'center'
    },


});

//输出类
module.exports = CommonCell;
