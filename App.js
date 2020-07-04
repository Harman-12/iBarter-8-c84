import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {bottomTabNavigator} from './components/bottomTabNavigator';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import WelcomeScreen from './screens/WelcomeScreen';

export default function App() {
  return (
    <AppContainer/>
  );
}




const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  bottomTabNavigator:{screen: bottomTabNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);