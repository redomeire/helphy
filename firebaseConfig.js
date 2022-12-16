// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBa9q9nZOKRuBGTazuokwfJpQwzwa1b5wQ",
  authDomain: "helphy-830dd.firebaseapp.com",
  projectId: "helphy-830dd",
  storageBucket: "helphy-830dd.appspot.com",
  messagingSenderId: "882870213756",
  appId: "1:882870213756:web:ec4cf184a12ba347fffdf9",
  measurementId: "G-17BSF183FM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
