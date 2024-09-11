import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Firebase from "./hooks/firebase/firebase";
import FirebaseContext from './hooks/firebase/useFireBase';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <FirebaseContext.Provider value={new Firebase() as any}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </FirebaseContext.Provider>
);
