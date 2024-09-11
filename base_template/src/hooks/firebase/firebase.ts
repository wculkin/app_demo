import { initializeApp, FirebaseApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4HiNRVFrwYFqe_8uMFyTgqjmeSTekm1Q",
  authDomain: "baseapp-9f0a2.firebaseapp.com",
  projectId: "baseapp-9f0a2",
  storageBucket: "baseapp-9f0a2.appspot.com",
  messagingSenderId: "236732555468",
  appId: "1:236732555468:web:02bcb42c9aa49be50fe269",
  measurementId: "G-TXMB1BRMTS"
};
class Firebase {
   app: FirebaseApp;

  constructor() {
    this.app = initializeApp(firebaseConfig);
  }
}

export default Firebase;
