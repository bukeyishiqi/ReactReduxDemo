/*
 * @Author: chenqi 
 * @Date: 2017-11-22 11:41:02 
 * @Last Modified by: chenqi
 * @Last Modified time: 2017-11-23 12:17:31
 */

import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

export default class Main extends React.Component {
   constructor(props) {
       super(props);
   }

   onPress = () => {
       const { actions } = this.props;
       
       actions.requestList(true, true);
   }

   render() {
       console.log('***render:', this.props.read);
       const {loading} = this.props.read;
       if(loading) {
            return (
                <View>
                <Text onPress = {this.onPress}>点击我试一下</Text>
                </View>
            );
       } else {
            return (
                <View>
                <Text onPress = {this.onPress}>加载完成</Text>
                </View>
            );
       }
   };

}