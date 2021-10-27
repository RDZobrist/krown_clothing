import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import {FacebookAuthProvider, getAuth, signInWithPopup} from 'firebase/auth';




export const signInWithFacebook = ()=>(
  signInWithPopup(auth, fbProvider)
  .then((result) => {
    console.log(result.user)
    // The signed-in user info.
    const user = result.user;
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;

    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);

    // ...
  })
)

const firebaseConfig = {
    apiKey: "AIzaSyCnPhU5FOQJ5iWGPtNYnNYhC2jZJglQ0DM",
    authDomain: "krownclothingdb.firebaseapp.com",
    projectId: "krownclothingdb",
    storageBucket: "krownclothingdb.appspot.com",
    messagingSenderId: "677870554234",
    appId: "1:677870554234:web:1a64600583e3b6042d7fc3",
    measurementId: "G-XNXCM6FTL2"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if(!snapshot.exists){
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      
      try {
        await userRef.set({
          displayName, 
          email,
          createdAt,
          ...additionalData
        })
      }
      catch (error){
        console.log('error  ', error)
      }
    }
  }

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' }); 
export const signInWithGoogle = () => auth.signInWithPopup(provider);

const fbProvider = new firebase.auth.FacebookAuthProvider();
fbProvider.setCustomParameters({
  'display': 'popup'
});

export default firebase;
