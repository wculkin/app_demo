import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Firebase from "./hooks/firebase/firebase";
import FirebaseContext from './hooks/firebase/useFireBase';
import {GlobalStateProvider} from "./hooks/auth/GlobalUser";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <FirebaseContext.Provider value={new Firebase() as any}>
        <GlobalStateProvider>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </GlobalStateProvider>
    </FirebaseContext.Provider>
);
