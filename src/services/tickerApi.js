/* eslint-disable max-len */
export const getFetch = (symbol) => {
  return fetch(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-chart?interval=5m&symbol=${symbol}&range=1d&region=US`, {
    'method': 'GET',
    'headers': {
      'x-rapidapi-key': process.env.TICKER_API_KEY,
      'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    }
  })
    .then(response => response.json())
    .then(({ chart }) => chart)
    .then(({ result }) => result[0].meta)
    .then((meta) => ({
      symbol: meta.symbol,
      previousClose: meta.previousClose,
      regularMarketPrice: meta.regularMarketPrice
    }))
    .catch(err => console.error(err));
};

// breaks @ 5 symbols
export const getAll = (symbols) => {  
  return Promise.all(symbols.map(symbol => getFetch(symbol)))
    .then(res => res.flat());
};

