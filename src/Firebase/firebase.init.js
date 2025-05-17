// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkG5W8BqpDDXT4pUeoedPLihU-lJkKzWE",
  authDomain: "coffee-store-app-a91b9.firebaseapp.com",
  projectId: "coffee-store-app-a91b9",
  storageBucket: "coffee-store-app-a91b9.firebasestorage.app",
  messagingSenderId: "821992626650",
  appId: "1:821992626650:web:fb6fd14e7bfe242ef748e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);