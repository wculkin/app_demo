import React from "react";
import {useGlobalState} from "../../hooks/auth/GlobalUser";

const Admin: React.FC = () => {
    const { isLegacy } = useGlobalState()
    console.log("isLegacy " , isLegacy)
  return (
    <div>
      <h1>Place holder page</h1>
    </div>
  );
};

export default Admin;