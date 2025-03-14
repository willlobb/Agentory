// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Copy the configuration exactly from your Firebase Console.
const firebaseConfig = {
  apiKey: "AIzaSyBDWuPRHjBpT1t2uJE8dVgluTw2CRtX-H0",
  authDomain: "agentory-9282b.firebaseapp.com",
  projectId: "agentory-9282b",
  storageBucket: "agentory-9282b.firebasestorage.app",
  messagingSenderId: "650332957843",
  appId: "1:650332957843:web:b54382304d0f0d3e25b166",
  measurementId: "G-0KZ78XFTQV"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log("User signed in:", result.user);
    // The onAuthStateChanged listener in AuthContext will update currentUser
  } catch (error) {
    console.error("Error during sign in:", error);
  }
};
