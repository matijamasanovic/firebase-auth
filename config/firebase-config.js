import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth' 



const firebaseConfig = {
  apiKey: "AIzaSyCNvud_F90CiVNWDV_Gd34gn45sZ_61oRY",
  authDomain: "fir-course-fa20b.firebaseapp.com",
  projectId: "fir-course-fa20b",
  storageBucket: "fir-course-fa20b.firebasestorage.app",
  messagingSenderId: "618804175088",
  appId: "1:618804175088:web:84b7341eb8db8b82e82235",
  measurementId: "G-TKK42Q0604"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()