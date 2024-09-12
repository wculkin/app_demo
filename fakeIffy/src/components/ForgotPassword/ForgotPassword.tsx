import React, { useState } from 'react';
import './ForgotPassword.css';
import {useNavigate} from "react-router-dom";  // Make sure this line imports your CSS file
import * as ROUTES from '../../constants/routes';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-form" >
        <h2>Forgot Password</h2>

        <div className="form-group">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button className="reset-password-button" onClick={() => alert("Not implemented as a part of demo")}>
          Reset Password
        </button>

        <button className="link-button" type="button" onClick={() => navigate(ROUTES.SIGN_IN)}>
          Back to Sign In
        </button>
        <button className="link-button" type="button" onClick={() => navigate(ROUTES.CREATE_USER)}>
          Create an Account</button>
      </div>
    </div>
  );
};

export default ForgotPassword;
