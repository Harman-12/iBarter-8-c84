import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SettingsScreen from '../screens/SettingsScreen';
import customSideBarMenu from '../components/customSideBarMenu';
import {bottomTabNavigator} from '../components/bottomTabNavigator';

export const AppDrawerNavigation = createDrawerNavigator({
    Home : {
      screen : bottomTabNavigator
      },
    Settings : {
      screen : SettingsScreen
      }
    },
    {
      contentComponent:customSideBarMenu
    },
    {
      initialRouteName : 'Home',
     
    })