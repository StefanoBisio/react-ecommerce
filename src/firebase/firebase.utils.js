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

// This is to register users that sign in with Google into the Firebase Firestore database. Pulling in ...additionalData in case we'll need more details form the object.
export const createUserProfileDocument = async (userAuth, additionalData) => {
    //Do nothing if user is logged out
    if(!userAuth) return;

    //If we were to console log 'userRef' we'd get just a reference from the database. A reference is always true, so I can't use it for what I need to do here. We can only use references for CRUD operations (create, read, update, and delete). We need a 'snapshot' from Firebase instead, that we get grom a .get() on the line below it. The snapshot document returns a value of 'exists', which can be true or false. We are in an Async function so let's add 'await'.
    //We basically want to get from the database a snapshot of the current user ID (appearing as 'uid') in the user object coming from App.js
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();    

    //If user id doesn't exist in the database, add it, but let's get more details from the user object before doing so
    if(!snapShot.exists) {

        //Take name of user and email from the logged in user, and create a timestamp too
        const { displayName, email} = userAuth;
        const createdAt = new Date();

        // This is an asynchronous request to write on the database, so a try catch is needed
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating used on database', error.message);
        }
    }

    //Always return the data of the logged in user, as I may need it for something else later
    return userRef;
    
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

//Setting to always trigger the Google popup when using this AuthProvider 
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
