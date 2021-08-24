import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBjqdfV0ktVVRC7ztmvOcKBXRT7ec0x0s4",
  authDomain: "responsible-me.firebaseapp.com",
  projectId: "responsible-me",
  storageBucket: "responsible-me.appspot.com",
  messagingSenderId: "120259903484",
  appId: "1:120259903484:web:f0752cdd5989019c023c79",
  measurementId: "G-DQF43JWDD0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
