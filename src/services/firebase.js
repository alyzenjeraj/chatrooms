import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAixxnG8BPy7afUa0_Q2hZOyRjFh2t1HH4",
  authDomain: "chatrooms-d3e22.firebaseapp.com",
  projectId: "chatrooms-d3e22",
  storageBucket: "chatrooms-d3e22.appspot.com",
  messagingSenderId: "1063197533227",
  appId: "1:1063197533227:web:82cee12df2f4d0843d766e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const loginWithGoogle = async () => {
    try {
        const provider = new GoogleAuthProvider();

        const auth = getAuth;

        const { user } = await signInWithPopup(auth, provider)

        return { uid: user.uid, displayName: user.displayName}
    } catch (error) {
        if (error.code !== 'auth/cancelled-popup-request') {
            console.error(error);
        }

        return null;
    }
}

