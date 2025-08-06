// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAv8OEQxjA7DwIuUWqwjhR3pjdmHw9BOuY",
  authDomain: "al-nageeb-stm.firebaseapp.com",
  projectId: "al-nageeb-stm",
  storageBucket: "al-nageeb-stm.firebasestorage.app",
  messagingSenderId: "1096369666448",
  appId: "1:1096369666448:web:e0a7cc36ed33a8efc01b15",
  measurementId: "G-3PT7LZE732"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);