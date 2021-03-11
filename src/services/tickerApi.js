/* eslint-disable max-len */
export const getFetch = () => {
  return fetch('https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-chart?interval=5m&symbol=slb&range=1d&region=US', {
    'method': 'GET',
    'headers': {
      'x-rapidapi-key': 'ea5b728cb8msh5828bd90eda5c7fp16706ejsnf48fb58ce6f6',
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

//`${process.env.TICKER_API_KEY}`