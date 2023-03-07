import firebase from "firebase/compat/app";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBmqfuYZRVYr_ZTXbSB6EFBdy_6VS1T3kA",
  authDomain: "react-hooks-blog-c9eeb.firebaseapp.com",
  projectId: "react-hooks-blog-c9eeb",
  storageBucket: "react-hooks-blog-c9eeb.appspot.com",
  messagingSenderId: "16036073972",
  appId: "1:16036073972:web:e882341d2fe0db0ecc69a1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const firestore = firebase.firestore();