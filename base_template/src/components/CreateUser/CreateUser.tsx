import React, { useState } from "react";
import "./CreateUser.css";
import {useFirebase} from "../../hooks/firebase/useFireBase";


export type CreateUserProps = {
  formTitle: string

};
const CreateUser: React.FC<CreateUserProps> = ({formTitle}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const firebase = useFirebase();
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

        <button type="submit" className="create-user-button" onClick={() => firebase.doCreateUserWithEmailAndPassword(email,password)}>
          Create Account
        </button>
        <div className="additional-links">
          <button type="button" className="link-button" onClick={() => console.log("go to sign In ")}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
