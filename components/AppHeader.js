import React, { Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Header , Icon} from 'react-native-elements';

const AppHeader = props => {
    return (
          
                <Header 
                    containerStyle={{borderBottomColor:'blue', borderBottomWidth:2}}
                    placement="center"
                    backgroundColor = {'white'}
                    leftComponent={<Icon name='bars' type='font-awesome' color='#696969' onPress={() => props.navigation.toggleDrawer()}/>}
                    rightComponent={<Image
                        style={styles.tinyLogo}
                        source={require('../assets/icon-barter.png')}
                    />}
                    centerComponent = {{
                        text : 'iBarter App',
                        style : { color: '#ff914d', fontSize: 21}
                    }}
                />
      
                );
            };
            
            export default AppHeader;

const styles = StyleSheet.create({
    tinyLogo: {
      width: 40,
      height: 40,
    }
});