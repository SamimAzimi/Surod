// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8keGoY4k8OIAwaFBry2Im1Aqt0K9kpuc",
  authDomain: "lyrics-c0904.firebaseapp.com",
  projectId: "lyrics-c0904",
  storageBucket: "lyrics-c0904.appspot.com",
  messagingSenderId: "242468371068",
  appId: "1:242468371068:web:6495c8bc48c357785ce7f9",
  measurementId: "G-7ZFYK5E94Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default {db, app}