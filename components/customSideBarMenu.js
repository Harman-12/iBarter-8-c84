import React, { Component} from 'react';
import {View, Text,TouchableOpacity} from 'react-native';
import { DrawerItems} from 'react-navigation-drawer'

import * as firebase from 'firebase'
import 'firebase/firestore';
import db from '../config';

export default class customSideBarMenu extends Component{
  render(){
    return(
      <View style={{flex:1}}>
        <DrawerItems {...this.props}/>
        <View style={{flex:1,justifyContent:'flex-end',paddingBottom:30}}>
          <TouchableOpacity style={{justifyContent:'center',padding:10,height:30,width:'100%', backgroundColor: 'red'}}
          onPress = {() => {
              this.props.navigation.navigate('WelcomeScreen')
              firebase.auth().signOut()
          }}>
            <Text style={{color: 'white', fontSize: 17, textAlign: 'center'}}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}