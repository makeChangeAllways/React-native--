/**
 * Created by app on 2017/5/16.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Platform,
    Image,
    TouchableOpacity,
    WebView
} from 'react-native';

//创建类
var  Shop =React.createClass ({
    getInitialState(){
        return {
            detailUrl: 'http://bj.meituan.com/category/meishi?mtt=1.index%2Ffloornew.im.9.j3junfzu'
    }

    },
    render() {
        return (
            <View style={styles.container}>

                {/*导航条*/}
                {this.renderNavBar()}
                <WebView
                    automaticallyAdjustContentInsets={true}
                    source={{uri:this.state.detailUrl}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate='normal'
                    startInLoadingState={true}

                />

            </View>
        );
    },
    renderNavBar(){
        return(
            <View style={styles.navOutViewStyle}>
                <TouchableOpacity onPress={()=>this.props.navigator.pop()} style={styles.leftOutViewStyle}>

                    <Image source={{uri:'icon_shop_local'}} style={styles.navImageStyle}/>
                </TouchableOpacity>
                <Text style={{color:'white',fontSize:16,fontWeight:'bold'}}>商家</Text>

                <TouchableOpacity onPress={()=>{alert('点击了')}} style={styles.rightOutViewStyle}>

                    <Image source={{uri:'icon_shop_search'}} style={styles.navImageStyle}/>
                </TouchableOpacity>
            </View>
        )
    },
});

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
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

    },
    leftOutViewStyle:{
        // 绝对定位
        position:'absolute',
        left:10,
        bottom:Platform.OS == 'ios' ? 15:13
    }

});

//输出类
module.exports = Shop;
