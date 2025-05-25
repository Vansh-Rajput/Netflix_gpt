// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtfTwWttGPtjZC5opNlnluk3sh-z8P2tE",
  authDomain: "netflixgpt-c5957.firebaseapp.com",
  projectId: "netflixgpt-c5957",
  storageBucket: "netflixgpt-c5957.firebasestorage.app",
  messagingSenderId: "312241037549",
  appId: "1:312241037549:web:4b82abfb9e1fc29eb96ce4",
  measurementId: "G-68DTET8LN6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);