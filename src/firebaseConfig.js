import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyBiZwnJvo7eqMB7tmcjfhcTpiq4z8aWgTE",
  authDomain: "type-king.firebaseapp.com",
  projectId: "type-king",
  storageBucket: "type-king.appspot.com",
  messagingSenderId: "810102252866",
  appId: "1:810102252866:web:0b0892bc91ebc7c00d14db",
  measurementId: "G-W9QN6SY6NJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
