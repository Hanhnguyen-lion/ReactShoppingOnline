import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';



const Auth0ProviderWithHistory = ({ children }) => {
  const domain = "abc123.us.auth0.com";
  const clientId = "abc123";

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{redirect_uri: window.location.origin}}
      
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;