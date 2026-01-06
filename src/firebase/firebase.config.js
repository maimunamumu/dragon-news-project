// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrCxWx3neC2jiwYTiljSm4FkeBJ8pliHQ",
  authDomain: "dragon-news-project-breking.firebaseapp.com",
  projectId: "dragon-news-project-breking",
  storageBucket: "dragon-news-project-breking.firebasestorage.app",
  messagingSenderId: "802751999694",
  appId: "1:802751999694:web:ce43992f50bc4a00a46a9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;