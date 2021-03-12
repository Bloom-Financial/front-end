export const requestNewPaperOrder = (accessToken, alpacaData) => {
  const { symbol, qty, side, order, timeInForce } = alpacaData;

  return fetch('https://paper-api.alpaca.markets/v2/orders', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      symbol: `${symbol}`,
      qty: `${qty}`,
      side: `${side}`,
      type: `${order}`,
      time_in_force: `${timeInForce}`,
    }),
  })
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
    });
};
