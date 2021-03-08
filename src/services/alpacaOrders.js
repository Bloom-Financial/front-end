export const requestNewPaperOrder = (token) => {
  return fetch('https://paper-api.alpaca.markets/v2/positions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`
    },
    body: {
      
    }
  })
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
    });
};
