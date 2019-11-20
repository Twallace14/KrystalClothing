import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD-qAkaufGWofr3rZ4wUdLIzlqPJHpVUWo",
    authDomain: "krystalclothingdb.firebaseapp.com",
    databaseURL: "https://krystalclothingdb.firebaseio.com",
    projectId: "krystalclothingdb",
    storageBucket: "krystalclothingdb.appspot.com",
    messagingSenderId: "641344449852",
    appId: "1:641344449852:web:8744cf69986217d720c239",
    measurementId: "G-7GPJSXQMXS"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({displayName, email, createdAt, ...additionalData})
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
