import React from "react";
import CreateUser from "../../components/CreateUser";

const CreateUserPage: React.FC = () => {

  return (
      <>
        <CreateUser formTitle={"legacy create user"}/>
        <CreateUser formTitle={"New create user"}/>
      </>
  );
};
export default CreateUserPage;
