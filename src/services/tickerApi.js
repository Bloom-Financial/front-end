/* eslint-disable max-len */
export const getFetch = () => {

  return fetch('https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=tesla, amzn, s&p&region=US', {
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
