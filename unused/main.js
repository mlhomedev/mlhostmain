// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIWh8P9WtbMGGQK2yEQU91yHtZ0j0tgwc",
  authDomain: "ml-host-3ef1d.firebaseapp.com",
  projectId: "ml-host-3ef1d",
  storageBucket: "ml-host-3ef1d.appspot.com",
  messagingSenderId: "679042805359",
  appId: "1:679042805359:web:00e29633907af187e8e79a",
  measurementId: "G-3NL8X2V3ND"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);