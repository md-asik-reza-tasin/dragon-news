// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaUrZfj96U6RdiOxPBu5XPouy46rUXVXA",
  authDomain: "dragon-news-55ce6.firebaseapp.com",
  projectId: "dragon-news-55ce6",
  storageBucket: "dragon-news-55ce6.firebasestorage.app",
  messagingSenderId: "790941976847",
  appId: "1:790941976847:web:5db9aa687061e28eb5567a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;