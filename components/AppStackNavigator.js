import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import ReceiverDetailsScreen from '../screens/ReceiverDetailsScreen';
import Notifications from '../screens/Notifications'

export const AppStackNavigator = createStackNavigator({
  BarterList : {
    screen : HomeScreen,
    navigationOptions:{
      headerShown : false
    }
  },

  ReceiverDetails : {
    screen : ReceiverDetailsScreen,
    navigationOptions:{
      headerShown : false
    }
  },

  Notification : {
    screen : Notifications,
    navigationOptions:{
      headerShown : false
    }
  }

},
  {
    initialRouteName: 'BarterList'
  }
);