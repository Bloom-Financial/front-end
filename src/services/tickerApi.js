/* eslint-disable max-len */
export const getFetch = () => {

<<<<<<< HEAD
  return fetch('https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-chart?interval=5m&symbol=SLB&range=1d&region=US', {
=======
  return  await fetch('https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=tesla, amzn, s&p&region=US', {
>>>>>>> 6e88edb88874455718bdc72d20c29a2bf89ccaad
    'method': 'GET',
    'headers': {
      'x-rapidapi-key': 'ea5b728cb8msh5828bd90eda5c7fp16706ejsnf48fb58ce6f6',
      'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    }
  })
    .then(response => response.json())
    .then(({ chart }) => chart)
    .then(({ result }) => result[0].meta)
    .then(({ ...meta }) => ({
      symbol: meta.symbol,
      regularMarketPrice: meta.regularMarketPrice,
      previousClose: meta.previousClose
  
    }))


    

    
    // .then(({ quotes }) => quotes.map(quote => ({
    //   symbol: quote.symbol,
    //   exchange: quote.exchange,
    // })))
    .catch(err => console.error(err));
     
};


//  
