// Import the functions you need from the SDKs you need


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getFirestore } from 'firebase/firestore'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app = firebase.initializeApp({
  apiKey: "AIzaSyCz9mXZrytY3u2uBpX9vjvGj5GAxfMYXJQ",
  authDomain: "resume-test-13c31.firebaseapp.com",
  projectId: "resume-test-13c31",
  storageBucket: "resume-test-13c31.appspot.com",
  messagingSenderId: "860285641437",
  appId: "1:860285641437:web:033b11c901e52095583134"
});


// Initialize Firebase
export const db = getFirestore(app);
export const auth = app.auth()
export default app