import { accessToken } from '../state/authProvider';

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

export const getAssetsByStockName = (stock) => {
  return fetch(`https://paper-api.alpaca.markets/v2/assets/${stock}`, {
    method: 'GET',
    headers: {
      'APCA-API-KEY-ID': 'PKCMVVTLMUA016H9WEG5',
      'APCA-API-SECRET-KEY': 'CQVgOScXGPdpDjeoFR9z79PuHNRur5B4gAL4Bjmr',
    },
  })
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
    });
};
//  'APCA-API-KEY-ID': 'PKCMVVTLMUA016H9WEG5',
//     'APCA-API-SECRET-KEY': 'CQVgOScXGPdpDjeoFR9z79PuHNRur5B4gAL4Bjmr',
