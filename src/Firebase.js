// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAM6hYXRECkWycTTTItHoyhbnlxQ02JdB8",
  authDomain: "to-do-35476.firebaseapp.com",
  projectId: "to-do-35476",
  storageBucket: "to-do-35476.appspot.com",
  messagingSenderId: "231843184525",
  appId: "1:231843184525:web:b1c602b95a76db9b6507c4",
  measurementId: "G-MPGP1JNP4T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);