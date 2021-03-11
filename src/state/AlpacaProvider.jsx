import React, { useReducer, createContext, useContext } from 'react';
import alpacaReducer, { initialState } from '../reducers/alpacaReducer';

const AlpacaContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const AlpacaProvider = ({ children }) => {
  const [state, dispatch] = useReducer(alpacaReducer, initialState);

  return (
    // eslint-disable-next-line max-len
    <AlpacaContext.Provider value={{ state, dispatch }}>{children}</AlpacaContext.Provider>
  );
};

export const useSelector = selector => {
  const { state } = useContext(AlpacaContext);
  return selector(state);
};

export const useDispatch = () => {
  const { dispatch } = useContext(AlpacaContext);
  return dispatch;
};
