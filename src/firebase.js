import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAiKs4YO8SibO31G-6fji4FJYgwffyoZKY",
  authDomain: "isafe-24038.firebaseapp.com",
  databaseURL: "https://isafe-24038-default-rtdb.firebaseio.com",
  projectId: "isafe-24038",
  storageBucket: "isafe-24038.firebasestorage.app",
  messagingSenderId: "200766870041",
  appId: "1:200766870041:web:cb2a0d3d2996a6a2e75088"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app); 
const db = getDatabase(app); 

export { auth, db, createUserWithEmailAndPassword, set, ref };
