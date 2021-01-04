import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyA5LadoP0zH3R-q6_IkL9Z9qK8WFlYCygQ",
    authDomain: "todo-ninja-a038e.firebaseapp.com",
    projectId: "todo-ninja-a038e",
    storageBucket: "todo-ninja-a038e.appspot.com",
    messagingSenderId: "99371176296",
    appId: "1:99371176296:web:9c71381d612d5975ad46dd",
    measurementId: "G-EZ3N58E22T"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const db = firebase.firestore();

export default db;