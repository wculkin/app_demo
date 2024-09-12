import React, { createContext, ReactNode, useContext } from 'react';
import Firebase from './firebase';

const FirebaseContext = createContext<Firebase | null>(null);

export const useFirebase = (): Firebase => {
  const context = useContext(FirebaseContext);
  if (!context) {
    throw new Error('useFirebase must be used within a FirebaseProvider');
  }
  return context;
};

export default FirebaseContext;
