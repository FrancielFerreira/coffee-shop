import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

console.log();
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'coffee-shops-a6057.firebaseapp.com',
  projectId: 'coffee-shops-a6057',
  storageBucket: 'coffee-shops-a6057.appspot.com',
  messagingSenderId: '21154148804',
  appId: '1:21154148804:web:20fb5e4e2c559f8772f491',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
