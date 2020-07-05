import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {bottomTabNavigator} from './components/bottomTabNavigator';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import WelcomeScreen from './screens/WelcomeScreen';
import { AppDrawerNavigation } from './components/AppDrawerNavigation'

export default function App() {
  return (
    <AppContainer/>
  );
}




const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  AppDrawerNavigation:{screen: AppDrawerNavigation}
})

const AppContainer =  createAppContainer(switchNavigator);