// this is a wrapper for Auth0 login and logout buttons

// content is provided by Auth0
import React from "react";

import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

import { useAuth0 } from "@auth0/auth0-react";
import Axios from "axios";

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();
  const {user} = useAuth0();

  // create user DB entry on login if not exist
  const makeUserData = async () => {
      if (user){
        try {
          await Axios.post("/api/user", {userId: user.sub}).then (result => {
            if (result.data !== null){
              console.log("User is registered!");
            }
          });
        } catch (error){
          console.error(error);
        }
      }
  }
  // run make user data
  if (isAuthenticated){
    makeUserData();
  }

  return (
    isAuthenticated? <LogoutButton /> : <LoginButton />
  );
};

export default AuthenticationButton;