export const getUserPortfolio = () => {
  return fetch('https://paper-api.alpaca.markets/v2/positions', {
    method: 'GET',
    headers: {
      'APCA-API-KEY-ID': 'PKCMVVTLMUA016H9WEG5',
      'APCA-API-SECRET-KEY': 'CQVgOScXGPdpDjeoFR9z79PuHNRur5B4gAL4Bjmr',
    },
  }).then((res) => res.json());
};
