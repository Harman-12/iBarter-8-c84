import * as firebase from 'firebase'
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDZ3CspfCF179JE5nxxd3XxI21e3CSnNws",
  authDomain: "ibarter.firebaseapp.com",
  databaseURL: "https://ibarter.firebaseio.com",
  projectId: "ibarter",
  storageBucket: "ibarter.appspot.com",
  messagingSenderId: "328655958011",
  appId: "1:328655958011:web:ac830499970a0b0dc6655e",
  measurementId: "G-K180BMKQEB"
};
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  export default db;