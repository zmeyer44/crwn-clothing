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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  //Check if null
  if (!userAuth) return;

  //See if user already exists
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  //Document Snapshot exists property will tell you if the document, this uid, exists in the collection

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
