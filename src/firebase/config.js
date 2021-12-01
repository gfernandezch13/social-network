// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC6kyq8LZLe2w92esp-a9tTpDv74BowoPA',
  authDomain: 'social-network-3c43c.firebaseapp.com',
  projectId: 'social-network-3c43c',
  storageBucket: 'social-network-3c43c.appspot.com',
  messagingSenderId: '835592771725',
  appId: '1:835592771725:web:e7628c187702eddd412ac4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

// Functions for get data
const getRefCollection = (collectionPath) => collection(db, collectionPath);

export { db, getRefCollection };
export default app;
