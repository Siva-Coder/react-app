import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyCo2U-Z-JbagRKga8rgWKNWiiWpyy8ebJA",
    authDomain: "happy-homez.firebaseapp.com",
    databaseURL: "https://happy-homez.firebaseio.com",
    projectId: "happy-homez",
    storageBucket: "happy-homez.appspot.com",
    messagingSenderId: "61326391204",
    appId: "1:61326391204:web:bffb403ad0847d1cbdf331",
    measurementId: "G-9602X75BH2"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage, firebaseApp};