/* eslint-disable max-len */
import React, { useState, useContext } from 'react';

const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState();

  
  const redirectToAlpaca = () => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    // eslint-disable-next-line max-len
    if(!accessToken && !code)
      window.location =
        'https://app.alpaca.markets/oauth/authorize?response_type=code&client_id=edb6dea4ea1d646cd3bb3f82667f33df&redirect_uri=http://localhost:7891&scope=%20trading';

    fetch('http://localhost:7890/api/v1/auth/token', {
      method: 'Post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ code }),
    })
      .then((res) => res.json())
      .then(({ accessToken }) => setAccessToken(accessToken));
  };
  return (
    <AuthContext.Provider value={{ accessToken, redirectToAlpaca }}>{children}</AuthContext.Provider>

  );
};
export const useAlpacaRedirect = () => {
  const { redirectToAlpaca } = useContext(AuthContext);
  return redirectToAlpaca;
};
