// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzjnoBqJ0EX2P4B6ft3LeAPa5xuu3lBKM",
  authDomain: "firestock-aae85.firebaseapp.com",
  projectId: "firestock-aae85",
  storageBucket: "firestock-aae85.appspot.com",
  messagingSenderId: "448758055234",
  appId: "1:448758055234:web:d2947cb3988b74ea6b08db"
};

// Initialize Firebase
const app = () => {
    if(!firebaseConfig || !firebaseConfig.apiKey) {
        throw new Error('No Firebae configuration object provided.' + '\n' + 'Add your web app\'s configuration object to firebase-config.js');
    } else {
        console.log('Firebase initialized!')
    }
    return initializeApp(firebaseConfig);
}
export default app;