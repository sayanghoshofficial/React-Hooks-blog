import firebase from "firebase/compat/app";
import "firebase/compat/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCFyPpqPB6ZxzDdG1F3eD8ZvDU6AC6dWX0",
    authDomain: "react-hooks-blog-417bb.firebaseapp.com",
    projectId: "react-hooks-blog-417bb",
    storageBucket: "react-hooks-blog-417bb.appspot.com",
    messagingSenderId: "654548450215",
    appId: "1:654548450215:web:200cbaafe43f71ed851482"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const firestore = firebase.firestore();