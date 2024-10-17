// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCd9kded6na7d-GR5dpBUvlP1IRnFG4caw",
  authDomain: "week7-feng.firebaseapp.com",
  projectId: "week7-feng",
  storageBucket: "week7-feng.appspot.com",
  messagingSenderId: "719766904132",
  appId: "1:719766904132:web:94680898ff6b0e6b158b11"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore()
export default db