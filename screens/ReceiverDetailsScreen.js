import React ,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native';
import{Card,Header,Icon} from 'react-native-elements';

import * as firebase from 'firebase'
import 'firebase/firestore';
import db from '../config';

export default class ReceiverDetailsScreen extends Component{
  constructor(props){
    super(props);
    this.state={
      userId          : firebase.auth().currentUser.email,
      receiverId      : this.props.navigation.getParam('details')["username"],
      exchangeId       : this.props.navigation.getParam('details')["exchangeId"],
      itemName        : this.props.navigation.getParam('details')["item_name"],
      description  : this.props.navigation.getParam('details')["description"],
      recieverName    : '',
      recieverContact : '',
      recieverAddress : '',
      recieverRequestDocId : ''
    }
  }



getRecieverDetails(){
  db.collection('users').where('username','==',this.state.receiverId).get()
  .then(snapshot=>{
    snapshot.forEach(doc=>{
      this.setState({
        recieverName    : doc.data().first_name,
        recieverContact : doc.data().mobile_number,
        recieverAddress : doc.data().address,
      })
    })
  });

  db.collection('exchange_requests').where('exchangeId','==',this.state.exchangeId).get()
  .then(snapshot=>{
    snapshot.forEach(doc => {
      this.setState({recieverRequestDocId:doc.id})
   })
})}

updateBarterStatus=()=>{
  db.collection('all_barters').add({
    book_name           : this.state.itemName,
    exchange_id          : this.state.exchangeId,
    requested_by        : this.state.recieverName,
    donor_id            : this.state.userId,
    request_status      :  "Donor Interested"
  })
}



componentDidMount(){
  this.getRecieverDetails()
}


  render(){
    return(
      <View style={styles.container}>
        <View style={{flex:0.1}}>
          <Header
            containerStyle={{borderBottomColor:'blue', borderBottomWidth:2}}
            placement="center"
            backgroundColor = {'white'}
            leftComponent ={<Icon name='arrow-left' type='feather' color='blue' onPress={() => this.props.navigation.goBack()}/>}
            centerComponent={{ text:"Exchange Items", style: { color: 'orange', fontSize:20,fontWeight:"bold", } }}
            rightComponent={<Image
                style={styles.tinyLogo}
                source={require('../assets/icon-barter.png')}
            />}
            backgroundColor = "white"
          />
        </View>
        <View style={{flex:0.3}}>
          <Card
              title={"Item Information"}
              titleStyle= {{fontSize : 20}}
            >
            <Card >
              <Text style={{fontWeight:'bold'}}>Name : {this.state.itemName}</Text>
            </Card>
            <Card>
              <Text style={{fontWeight:'bold'}}>Description : {this.state.description}</Text>
            </Card>
          </Card>
        </View>
        <View style={{flex:0.3}}>
          <Card
            title={"Reciever Information"}
            titleStyle= {{fontSize : 20}}
            >
            <Card>
              <Text style={{fontWeight:'bold'}}>Name: {this.state.recieverName}</Text>
            </Card>
            <Card>
              <Text style={{fontWeight:'bold'}}>Contact: {this.state.recieverContact}</Text>
            </Card>
            <Card>
              <Text style={{fontWeight:'bold'}}>Address: {this.state.recieverAddress}</Text>
            </Card>
          </Card>
        </View>
        <View style={styles.buttonContainer}>
          {
            this.state.recieverId !== this.state.userId
            ?(
              <TouchableOpacity
                  style={styles.button}
                  onPress={()=>{
                    this.updateBarterStatus()
                    this.props.navigation.navigate('MyBarters')
                  }}>
                <Text>I want to Exchange</Text>
              </TouchableOpacity>
            )
            : null
          }
        </View>
      </View>
    )
  }

}


const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  tinyLogo: {
    width: 40,
    height: 40,
  },
  buttonContainer : {
    flex:0.3,
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    width:200,
    height:50,
    justifyContent:'center',
    alignItems : 'center',
    borderRadius: 10,
    backgroundColor: 'orange',
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8
     },
    elevation : 16
  }
})