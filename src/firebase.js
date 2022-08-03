// Import the functions you need from the SDKs you need


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getFirestore } from 'firebase/firestore'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app = firebase.initializeApp({
  apiKey: "AIzaSyCy0emRX8sOB9OyTeCupY3rbLa6w2LOlf4",
  authDomain: "resumetest-d05ca.firebaseapp.com",
  projectId: "resumetest-d05ca",
  storageBucket: "resumetest-d05ca.appspot.com",
  messagingSenderId: "138679146892",
  appId: "1:138679146892:web:23f3ca46eef963d83d9ea9"
});


// Initialize Firebase
export const db = getFirestore(app);
export const auth = app.auth()
export default app