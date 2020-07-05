import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';
import AppHeader from '../components/AppHeader'

export default class SettingsScreen extends Component{
    render(){
      return(
        <View style={styles.container}>
            <AppHeader/>
          <Text>Settings screen</Text>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center'
  }
})