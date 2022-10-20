// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAXJTPUClPJXj8wxU0RG10i2PCOBLd_TBY",
    authDomain: "slang-d7e33.firebaseapp.com",
    projectId: "slang-d7e33",
    storageBucket: "slang-d7e33.appspot.com",
    messagingSenderId: "201451042496",
    appId: "1:201451042496:web:7315a31ea5939effe29f25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;