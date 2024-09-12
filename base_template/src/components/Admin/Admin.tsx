import React from "react";
import { useGlobalState } from "../../hooks/auth/GlobalUser";
import "./Admin.css";

const Admin: React.FC = () => {
  const { user, isLegacy } = useGlobalState();
  console.log("isLegacy ", isLegacy);

  if (isLegacy === null) {
    return (
      <div className="notLoggedIn">
        <h1>Not Logged In</h1>
        <p>Please sign in or create an account.</p>
      </div>
    );
  } else if (isLegacy) {
    return (
      <div className="legacyUser">
        <h1>Welcome, Legacy User!</h1>
        <p>Email: {user?.email}</p>
        <p>Status: Legacy</p>
      </div>
    );
  } else {
    return (
        <div className="regularUser">
            <h1>Welcome!</h1>
            <p>Email: {user?.email}</p>
            <p>Name: {user?.name}</p>
            <p>Name: {user?.password}</p>
        </div>
    );
  }
};

export default Admin;
