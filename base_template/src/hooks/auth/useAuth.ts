import { useContext, useEffect, useState } from 'react';
import {useFirebase} from "../firebase/useFireBase";
import {useGlobalDispatch} from "./GlobalUser";


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
    if(!firebase){return}
    try {
      const userCredential = await firebase.doSignInWithEmailAndPassword(email, password);
      dispatch({ type: 'SET_USER', payload: userCredential.user });
    } catch (error) {
      console.error('Error signing in:', error);
      throw error; // Re-throw error to be handled by the caller
    }
  };

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
