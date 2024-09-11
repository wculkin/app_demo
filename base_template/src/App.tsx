import React from 'react';
import {
  BrowserRouter as Router,
  Route, Routes,
} from 'react-router-dom';
import SignIn from "./components/SignIn";
import ForgotPassword from "./components/ForgotPassword";
import CreateUser from "./components/CreateUser";
import * as ROUTES from './constants/routes';
import {CREATE_USER, FORGOT_PASSWORD} from "./constants/routes";

function App() {
  return (
    <Router>
        <Routes>
            <Route  path={ROUTES.LANDING} element={<SignIn/>} />
            <Route  path={ROUTES.CREATE_USER} element={<CreateUser/>} />
            <Route  path={ROUTES.SIGN_IN} element={<SignIn/>} />
            <Route  path={ROUTES.FORGOT_PASSWORD} element={<ForgotPassword/>} />
        </Routes>
    </Router>
  );
}

export default App;