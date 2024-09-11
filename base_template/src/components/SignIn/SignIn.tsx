import React, {useState} from 'react';
import './SignIn.css';
import {useAuth} from "../../hooks/auth/useAuth";
import {useNavigate} from "react-router-dom";
import {ADMIN} from "../../constants/routes";


const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useAuth()
  const navigate = useNavigate();
  const handleSignIn = async() => {
    try{
      await auth.signIn(email,password)
      navigate(ADMIN)
    }catch(e) {
      console.log("error logging in ", e)
    }
  }

  return (
    <div className="sign-in-container">
      <div className="sign-in-form">
        <h2>Sign In</h2>
        <p>Please sign in to your account.</p>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Controlled input
              required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Controlled input
              required
          />
        </div>
        <button type="submit" className="sign-in-button" onClick={handleSignIn}>
          Sign In
        </button>
        <div className="additional-links">
          <button type="button" className="link-button" onClick={() => console.log("create account")}>
            Create Account
          </button>
          <button type="button" className="link-button" onClick={() => console.log("forgot password")}>
            Forgot Password?
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
