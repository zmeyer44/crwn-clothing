import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD1iZYqZRp85M4cSQd8pg_KHyVXjh8ejUM",
  authDomain: "crwn-db-1ef72.firebaseapp.com",
  projectId: "crwn-db-1ef72",
  storageBucket: "crwn-db-1ef72.appspot.com",
  messagingSenderId: "757964221879",
  appId: "1:757964221879:web:cfe3ac17521a0bc54e8c32",
  measurementId: "G-WGLZF6FLS0",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
