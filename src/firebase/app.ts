import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const {
  VITE_API_KEY,
  VITE_AUTH_DOMAIN,
  VITE_PROJECT_ID,
  VITE_MESSAGE_SENDER_ID,
  VITE_STORAGE_BUCKET,
  VITE_APP_ID,
} = import.meta.env;

export const firebaseConfig = {
  apiKey: VITE_API_KEY,
  authDomain: VITE_AUTH_DOMAIN,
  projectId: VITE_PROJECT_ID,
  storageBucket: VITE_STORAGE_BUCKET,
  messagingSenderId: VITE_MESSAGE_SENDER_ID,
  appId: VITE_APP_ID,
};

export const app = firebase.initializeApp(firebaseConfig);
export const dbService = firebase.firestore();
export const storageService = firebase.storage();
