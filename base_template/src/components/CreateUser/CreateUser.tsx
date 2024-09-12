import React, { useState } from "react";
import "./CreateUser.css";
import {useFirebase} from "../../hooks/firebase/useFireBase";
import {useNavigate} from "react-router-dom";
import {SIGN_IN} from "../../constants/routes"


export type CreateUserProps = {
  formTitle: string,
  onCreateUser: (email: string, password: string, name:string) => void;

};
const CreateUser: React.FC<CreateUserProps> = ({formTitle, onCreateUser}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const firebase = useFirebase();
  const navigate = useNavigate();

  return (
    <div className="create-user-container">
      <div className="create-user-form">
        <h2>{formTitle}</h2>

        <div className="form-group">
          <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
          />
        </div>

        <div className="form-group">
          <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
          />
        </div>

        <div className="form-group">
          <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
          />
        </div>

        <button type="submit" className="create-user-button" onClick={() => onCreateUser(email,password,name)}>
          Create Account
        </button>
        <div className="additional-links">
          <button type="button" className="link-button" onClick={() => navigate(SIGN_IN)}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
