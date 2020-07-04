import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen';
import ExchangeScreen from '../screens/ExchangeScreen';



export const bottomTabNavigator = createBottomTabNavigator({
    HomeScreen : {
        screen: HomeScreen,
        navigationOptions :{
        tabBarIcon : <Image source={require("../assets/home.png")} style={{width:37, height:37}}/>,
        tabBarLabel : "Home",
        }
    },
    ExchangeScreen : {
        screen: ExchangeScreen,
        navigationOptions :{
        tabBarIcon : <Image source={require("../assets/exchange(1).png")} style={{width:34, height:34}}/>,
        tabBarLabel : "Exchange",
        }
    },
});