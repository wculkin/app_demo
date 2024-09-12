import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPYWmOfFmar-aPur8gg5NjIH8r96gsq6E",
  authDomain: "fakeiffy.firebaseapp.com",
  projectId: "fakeiffy",
  storageBucket: "fakeiffy.appspot.com",
  messagingSenderId: "83931864602",
  appId: "1:83931864602:web:11c01f167a46c8484cfba3",
  measurementId: "G-XQ4JVH9PMM"
};
class Firebase {
   app: FirebaseApp;
   auth: Auth;

  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.auth = getAuth(this.app);
  }
  doCreateUserWithEmailAndPassword = async (email: string, password: string) => {
    try{
      await createUserWithEmailAndPassword(this.auth, email, password);
      return true
    }catch{
      return false
    }
  }

  doSignInWithEmailAndPassword = (email: string, password: string) => {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  doSignOut = () => {
    return signOut(this.auth);
  }
}

export default Firebase;
