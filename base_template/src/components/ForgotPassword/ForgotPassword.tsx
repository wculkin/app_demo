import React, { useState } from 'react';
import './ForgotPassword.css';  // Make sure this line imports your CSS file

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
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

        <button className="reset-password-button" onClick={() => console.log("reset password")}>
          Reset Password, not planned for demo
        </button>

        <button className="link-button" type="button" onClick={() => console.log("back to ")}>
          Back to Sign In
        </button>
        <button className="link-button" type="button" onClick={() => console.log("create ")}>
          Create an Account</button>
      </div>
    </div>
  );
};

export default ForgotPassword;
