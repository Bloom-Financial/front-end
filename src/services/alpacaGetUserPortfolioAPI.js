export const getUserPaperPositions = (accessToken) => {
  return fetch('https://paper-api.alpaca.markets/v2/positions', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
    });
};
