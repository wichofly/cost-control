import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCuLLG0EOy_3B4QOnvz4UIfSKY-v8WTn98',
  authDomain: 'cost-control-8e769.firebaseapp.com',
  projectId: 'cost-control-8e769',
  storageBucket: 'cost-control-8e769.firebasestorage.app',
  messagingSenderId: '236101153320',
  appId: '1:236101153320:web:0b80074b1de9cb14513b1d',
  measurementId: 'G-GHN4SLY2LH',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { auth, db };
