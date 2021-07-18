import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyC97qU8_YwBOzyf2xp8hLvJwAI6Ok-ndiY",
  authDomain: "newflix-c6f11.firebaseapp.com",
  projectId: "newflix-c6f11",
  storageBucket: "newflix-c6f11.appspot.com",
  messagingSenderId: "35944707887",
  appId: "1:35944707887:web:98aebb15f8b739e6c253da",
  databaseURL: "https://newflix-c6f11-default-rtdb.firebaseio.com",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export const provider = new firebase.auth.FacebookAuthProvider();
const db = firebase.firestore();
export default db;
export const auth = firebase.auth();
export const database = firebase.database();
