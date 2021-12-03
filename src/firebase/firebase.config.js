import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAqHXCzTTXVH4W5xsp8J3TtpWKkGhkpp-A",
    authDomain: "redux-example-szb.firebaseapp.com",
    projectId: "redux-example-szb",
    storageBucket: "redux-example-szb.appspot.com",
    messagingSenderId: "312579531915",
    appId: "1:312579531915:web:eafae80479d57f399ce08e"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleProvider, firebase };
