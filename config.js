const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyDXGaoFtoJylxevfeZT-HagdJnM7pKcoJo",
  authDomain: "book-santa-50b98.firebaseapp.com",
  databaseURL: "https://book-santa-50b98.firebaseio.com",
  projectId: "book-santa-50b98",
  storageBucket: "book-santa-50b98.appspot.com",
  messagingSenderId: "932613271384",
  appId: "1:932613271384:web:dc74afb3da6485cb61bf2d",
  measurementId: "G-1CLB3SXT6Z"
};
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();
  export default db;