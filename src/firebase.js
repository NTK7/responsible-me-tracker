import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA5fyem_mEsLv7Nd_mImrmNEkB9oAemo7A",
  authDomain: "responsible-me-9d23f.firebaseapp.com",
  projectId: "responsible-me-9d23f",
  storageBucket: "responsible-me-9d23f.appspot.com",
  messagingSenderId: "1066301960683",
  appId: "1:1066301960683:web:246a78b4d0e775427e69ae",
  measurementId: "G-NPWHP2X0DY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
