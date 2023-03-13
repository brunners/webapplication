import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getDatabase} from 'firebase/database'
import { getStorage } from "firebase/storage";
const config = {

        apiKey: import.meta.env.VITE_FIREBASE_KEY,
        authDomain: import.meta.env.VITE_FIREBASE_DOMAIN,
        databaseURL: import.meta.env.VITE_FIREBASE_DATABASE,
        projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
        storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.VITE_FIREBASE_SENDER_ID,
        appId: import.meta.env.VITE_FIREBASE_APP_ID,
        measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
   
}


export const FirebaseApp = initializeApp(config)
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDatabase = getDatabase(FirebaseApp)
export const FirebaseStorage = getStorage(FirebaseApp)

