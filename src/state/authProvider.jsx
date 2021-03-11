/* eslint-disable max-len */
import React, { useReducer, useState, useContext, useEffect } from 'react';
import authReducer, { initialState } from '../reducers/authReducer';

const AuthContext = React.createContext(null);

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    if (code) {
      fetch('https://mysterious-basin-06930.herokuapp.com/api/v1/auth/token', {
        method: 'Post',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ code }),
      })
        .then((res) => res.json())
        .then(({ accessToken }) => {
          setAccessToken(accessToken);
        });
    }
  }, []);

  const redirectToAlpaca = () => {
    // eslint-disable-next-line max-len
    window.location =
      'https://app.alpaca.markets/oauth/authorize?response_type=code&client_id=edb6dea4ea1d646cd3bb3f82667f33df&redirect_uri=http://localhost:7891/home&scope=account:write%20trading';
  };
  return (
    <AuthContext.Provider
      value={{ state, dispatch, accessToken, redirectToAlpaca }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAlpacaRedirect = () => {
  const { redirectToAlpaca } = useContext(AuthContext);
  return redirectToAlpaca;
};

export const useAccessToken = () => {
  const { accessToken } = useContext(AuthContext);
  return accessToken;
};

export const useDispatch = () => {
  const { dispatch } = useContext(AuthContext);
  return dispatch;
};
