import { useState } from 'react';
import alpacaReducer from '../reducers/alpacaReducer';
const { symbol, qty, side, type, timeInForce } = useState(alpacaReducer());

export const requestNewPaperOrder = (accessToken) => {
  return fetch('https://paper-api.alpaca.markets/v2/orders', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    body: {
      symbol: `${symbol}`,
      qty: `${qty}`,
      side: `${side}`,
      type: `${type}`,
      time_in_force: `${timeInForce}`,
    },
  })
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
    });
};
