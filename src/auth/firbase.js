// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANwMB1ED9gxanhzMP2s7vwCVhrgz8k3A4",
  authDomain: "j-store-a5ec8.firebaseapp.com",
  projectId: "j-store-a5ec8",
  storageBucket: "j-store-a5ec8.appspot.com",
  messagingSenderId: "833063258158",
  appId: "1:833063258158:web:f86ad2d1cf705a7cdfb7bf",
  measurementId: "G-901XHC1NQ4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
