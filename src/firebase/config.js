import firebase from "firebase/app";
import "firebase/firestore";

const db = firebase
  .initializeApp({
    apiKey: "AIzaSyDteAJA2bOh3PzfvoXPAOmwy9DyV4dZ7Mk",
    authDomain: "services-e37d0.firebaseapp.com",
    databaseURL: "https://services-e37d0.firebaseio.com",
    projectId: "services-e37d0",
    storageBucket: "services-e37d0.appspot.com",
    messagingSenderId: "17881114045",
    appId: "1:17881114045:web:52e2976d7695aa10359ed4",
    measurementId: "G-KPFZKEE2SK"
  })
  .firestore();
// Initialize Firebase

const { Timestamp } = firebase.firestore;
export { Timestamp };

export default db;
