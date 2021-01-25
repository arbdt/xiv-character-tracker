// this is a navbar menu component to hold a login/out authentication button

// content provided by Auth0
import React from "react";
import AuthenticationButton from "./AuthenticationButton";

const AuthNav = () => (
  <div className="navbar-nav ml-auto">
    <AuthenticationButton />
  </div>
);

export default AuthNav;