import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDBdcPtOcPzswpijTmuNiluVB1Pj2MbqB0",
  authDomain: "crown-db-e255a.firebaseapp.com",
  databaseURL: "https://crown-db-e255a.firebaseio.com",
  projectId: "crown-db-e255a",
  storageBucket: "crown-db-e255a.appspot.com",
  messagingSenderId: "878884392258",
  appId: "1:878884392258:web:60d957f0df182a86fd4cdb",
  measurementId: "G-LDJ9P9R048",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
