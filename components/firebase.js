import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export const provider = new firebase.auth.FacebookAuthProvider();

var firebaseConfig = {
  apiKey: "AIzaSyC97qU8_YwBOzyf2xp8hLvJwAI6Ok-ndiY",
  authDomain: "newflix-c6f11.firebaseapp.com",
  projectId: "newflix-c6f11",
  storageBucket: "newflix-c6f11.appspot.com",
  messagingSenderId: "35944707887",
  appId: "1:35944707887:web:98aebb15f8b739e6c253da",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
const db = firebase.firestore();
export const auth = firebase.auth();

export default db;
