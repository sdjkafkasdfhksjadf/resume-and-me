// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIFj5KG9kmPGsMliIDIKxlWCy_MdAW794",
  authDomain: "resume-and-me.firebaseapp.com",
  projectId: "resume-and-me",
  storageBucket: "resume-and-me.appspot.com",
  messagingSenderId: "204907129601",
  appId: "1:204907129601:web:5517b96a5327d53fcd0900",
  measurementId: "G-49DNKNFCWX"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = app.auth()
export default app