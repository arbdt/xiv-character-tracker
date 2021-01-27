// following content provided by Auth0
import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN || "dev-cl0rszmy.au.auth0.com";
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID || "KYegJBfdFObt1ZBx1z4YZZYyp6R5iqOb";

  const history = useHistory();

  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
      //{console.log(`domain: ${domain}; clientId: ${clientId}`)}{/* testing purposes only*/}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;