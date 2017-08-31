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
var  ShopCenterDetail =React.createClass ({
    getInitialState(){
        return{
            detailUrl: this.props.url + '?uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_term=6.6&utm_source=AppStore&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&version_name=6.6&userid=160495643&utm_medium=iphone&lat=23.134709&utm_campaign=AgroupBgroupD100Ghomepage_shoppingmall_detailH0&token=b81UqRVf6pTL4UPLLBU7onkvyQoAAAAAAQIAACQVmmlv_Qf_xR-hBJVMtIlq7nYgStcvRiK_CHFmZ5Gf70DR47KP2VSP1Fu5Fc1ndA&lng=113.373890&f=iphone&ci=20&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594'
        }
    },
    render() {

        //alert(this.props.url);
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

                    <Image source={{uri:'icon_camera_back_normal'}} style={styles.navImageStyle}/>
                </TouchableOpacity>
                <Text style={{color:'white',fontSize:16,fontWeight:'bold'}}>购物中心详情</Text>

                <TouchableOpacity onPress={()=>{alert('点击了')}} style={styles.rightOutViewStyle}>

                    <Image source={{uri:'icon_mine_setting'}} style={styles.navImageStyle}/>
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
module.exports = ShopCenterDetail;
