import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA4wJE_3Xw9szb-Sv37UQnnGqo8Sm6cJKY",
    authDomain: "bookworm-ecommerce-app.firebaseapp.com",
    projectId: "bookworm-ecommerce-app",
    storageBucket: "bookworm-ecommerce-app.appspot.com",
    messagingSenderId: "1026066402504",
    appId: "1:1026066402504:web:f409c6d4b1719ab0d569fd"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth;

export {db, auth};