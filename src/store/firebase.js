// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCr7v4sqQJ1g8kfnaz5jyQttXD1MhlWnm0",
  authDomain: "clone-b694a.firebaseapp.com",
  projectId: "clone-b694a",
  storageBucket: "clone-b694a.firebasestorage.app",
  messagingSenderId: "914787591353",
  appId: "1:914787591353:web:e242a19116b91466be2768",
  measurementId: "G-BW0WT4TZEQ"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

//initialize firebase Service

const db = getFirestore(firebaseapp);
const auth = getAuth(firebaseapp);
const storage = getStorage(firebaseapp);
const provider = new GoogleAuthProvider();

export { db, auth, storage, provider };