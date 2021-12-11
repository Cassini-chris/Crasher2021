// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMBmpaFmASboGjJIvO6IY0dw829JZvSSo",
  authDomain: "crasher-app-2021.firebaseapp.com",
  projectId: "crasher-app-2021",
  storageBucket: "crasher-app-2021.appspot.com",
  messagingSenderId: "417364836130",
  appId: "1:417364836130:web:683e7feb21df3cc0a06f7b",
  measurementId: "G-TH2B01S3BZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();
