// Import the functions you need from the SDKs you need


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getFirestore } from 'firebase/firestore'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app = firebase.initializeApp({
  apiKey: "AIzaSyAIFj5KG9kmPGsMliIDIKxlWCy_MdAW794",
  authDomain: "resume-and-me.firebaseapp.com",
  projectId: "resume-and-me",
  storageBucket: "resume-and-me.appspot.com",
  messagingSenderId: "204907129601",
  appId: "1:204907129601:web:5517b96a5327d53fcd0900",
  measurementId: "G-49DNKNFCWX"
});


// Initialize Firebase
export const db = getFirestore(app);
export const auth = app.auth()
export default app