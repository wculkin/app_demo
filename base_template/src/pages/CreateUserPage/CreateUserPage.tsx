import React from "react";
import CreateUser from "../../components/CreateUser";
import {createUser} from "../../api/CallUsers";
import {useFirebase} from "../../hooks/firebase/useFireBase";

const CreateUserPage: React.FC = () => {
    const firebase = useFirebase();
    const doLegacySignIn = async(email:string,password:string) => {
        if(await firebase.doCreateUserWithEmailAndPassword(email, password)){
            alert("account created successfully. please sign in ")
        }else{
            alert("account probably already created ")
        }
    }
    return (
        <>
            <CreateUser formTitle={"legacy create user"} onCreateUser={doLegacySignIn}/>
            <CreateUser formTitle={"New create user"} onCreateUser={createUser}/>
        </>
    );
};
export default CreateUserPage;
