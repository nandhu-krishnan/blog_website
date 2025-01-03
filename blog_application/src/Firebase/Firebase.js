// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAo87VuGSdVNwsAkAb4sgfySyebJ_IaNi0",
  authDomain: "blogapplication-308f3.firebaseapp.com",
  projectId: "blogapplication-308f3",
  storageBucket: "blogapplication-308f3.firebasestorage.app",
  messagingSenderId: "130597644359",
  appId: "1:130597644359:web:1d1df1d8a4defa6bc92962",
  measurementId: "G-TW942QYZ1G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication
const auth = getAuth(app);

export { auth };
