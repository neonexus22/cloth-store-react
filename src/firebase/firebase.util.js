import firebase from "firebase/app";

import "firebase/auth";

const config = {
  apiKey: "AIzaSyCkcZj7LjGK5x97G0bpY7m0G7r4Nu489kc",
  authDomain: "cloth-store-e436c.firebaseapp.com",
  databaseURL: "https://cloth-store-e436c.firebaseio.com",
  projectId: "cloth-store-e436c",
  storageBucket: "cloth-store-e436c.appspot.com",
  messagingSenderId: "520551803747",
  appId: "1:520551803747:web:90524a84f771b6f1c38156",
  measurementId: "G-4X55XBQ3ND",
};

firebase.initializeApp(config);

// for google authentication
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
