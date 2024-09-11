import React, { useState } from "react";
import "./CreateUser.css"; // Import the custom CSS file

const CreateUser: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  return (
    <div className="create-user-container">
      <div className="create-user-form">
        <h2>Create Account</h2>

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

        <button type="submit" className="create-user-button" onClick={() => console.log("create account")}>
          Create Account
        </button>
        <div className="additional-links">
          <button type="button" className="link-button" onClick={() => console.log("sign In account")}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
