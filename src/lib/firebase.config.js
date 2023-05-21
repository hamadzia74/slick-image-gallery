// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOV5fawAZ2T2BoxyFJqQCTL9TSopIB5h0",
  authDomain: "firestock-bd298.firebaseapp.com",
  projectId: "firestock-bd298",
  storageBucket: "firestock-bd298.appspot.com",
  messagingSenderId: "770879615899",
  appId: "1:770879615899:web:cbd65f864e7ee44ae8a73e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export default app;