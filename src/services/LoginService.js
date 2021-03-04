require('dotenv').config();

export const getAuthorizationCode = () => {
  // eslint-disable-next-line max-len
  return fetch(`https://app.alpaca.markets/oauth/authorize?response_type=code&client_id=${process.env.CLIENT_ID}&redirect_uri=YOUR_REDIRECT_URL&state=${process.env.SERVICE_STATE}&scope=account:write%20trading`)
    .then(res => res.json)
    .then(console.log());
};
