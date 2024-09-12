import React from "react";
import CreateUser from "../../components/CreateUser";
import {createUser} from "../../api/CallUsers";
import {useFirebase} from "../../hooks/firebase/useFireBase";

const CreateUserPage: React.FC = () => {
    const firebase = useFirebase();
    return (
        <>
            <CreateUser formTitle={"legacy create user"} onCreateUser={firebase.doCreateUserWithEmailAndPassword}/>
            <CreateUser formTitle={"New create user"} onCreateUser={createUser}/>
        </>
    );
};
export default CreateUserPage;
