import { useContext, useEffect, useState } from 'react';
import {useFirebase} from "../firebase/useFireBase";
import {useGlobalDispatch} from "./GlobalUser";
import {createUser, signInUser} from "../../api/CallUsers";


export const useAuth = () => {
  const firebase = useFirebase()
  const dispatch = useGlobalDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if(!firebase){return}
    const unsubscribe = firebase.auth.onAuthStateChanged(async (user) => {
      if (user) {
        console.log('User logged in:', user); // Debug log
        dispatch({ type: 'SET_USER', payload: user});
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [firebase, dispatch]);

  const signIn = async (email: string, password: string) => {
    let signIn = false;
    try{
      signIn = await tryNewSignIn(email, password)  || signIn
    }catch(error){
      console.log('Error signing in');
    }
    try{
      signIn = await tryLegacySignIn(email, password)  || signIn
    }catch(error){
      console.log('Error signing in');
    }
    return signIn
  };

  const tryNewSignIn = async (email: string, password: string) => {
    const response = await signInUser(email,password)
    if (response == "signedIn"){
      return true
    }
    return false
  }

  const tryLegacySignIn = async (email: string, password: string) => {
    if(!firebase){return}
    try {
      const userCredential = await firebase.doSignInWithEmailAndPassword(email, password);
      dispatch({ type: 'SET_USER', payload: userCredential.user });
      return true
    } catch (error) {
      console.error('Error signing in:', error);
      return false
    }
  }

  const signOut = async () => {
    if(!firebase){return}
    try {
      await firebase.doSignOut();
      dispatch({ type: 'CLEAR_USER' });
    } catch (error) {
      console.error('Error signing out:', error);
      throw error; // Re-throw error to be handled by the caller
    }
  };
  return { loading, signIn, signOut };
};
