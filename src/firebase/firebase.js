// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAatv9VpR_-gGLzvPeuOHgeo1vkJ5UTjp4",
  authDomain: "netflixclonegpt-1c864.firebaseapp.com",
  projectId: "netflixclonegpt-1c864",
  storageBucket: "netflixclonegpt-1c864.firebasestorage.app",
  messagingSenderId: "1096731241380",
  appId: "1:1096731241380:web:2657208dc7061515ff6f31",
  measurementId: "G-SWZYTLBKFY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const analytics = getAnalytics(app);