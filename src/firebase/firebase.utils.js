//All the dependencies related to the app
import firebase from 'firebase/app';

//For the database. 'firebase' here is using the keyword imported above
import 'firebase/firestore';
//For authentication
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD7KL5RV0m2m1LVLm-51RVly9TmWpT9O-A",
    authDomain: "crwn-db-8bc74.firebaseapp.com",
    databaseURL: "https://crwn-db-8bc74.firebaseio.com",
    projectId: "crwn-db-8bc74",
    storageBucket: "crwn-db-8bc74.appspot.com",
    messagingSenderId: "775953601035",
    appId: "1:775953601035:web:5034810a3a635ef9f52d0e",
    measurementId: "G-5NX102BJQ3"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

//Setting to always trigger the Google popup when using this AuthProvider 
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
