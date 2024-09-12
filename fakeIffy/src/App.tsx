import React from 'react';
import {
  BrowserRouter as Router,
  Route, Routes,
} from 'react-router-dom';
import SignIn from "./components/SignIn";
import ForgotPassword from "./components/ForgotPassword";
import * as ROUTES from './constants/routes';
import Admin from "./components/Admin";
import CreateUserPage from "./pages/CreateUserPage";

function App() {
  return (
    <Router>
        <Routes>
            <Route  path={ROUTES.LANDING} element={<SignIn/>} />
            <Route  path={ROUTES.CREATE_USER} element={<CreateUserPage/>} />
            <Route  path={ROUTES.SIGN_IN} element={<SignIn/>} />
            <Route  path={ROUTES.FORGOT_PASSWORD} element={<ForgotPassword/>} />
            <Route  path={ROUTES.ADMIN} element={<Admin/>} />
        </Routes>
    </Router>
  );
}

export default App;
