/* eslint-disable max-len */
export const getFetch = async() => {

  return  await fetch('https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=tesla, amzn, s&p&region=US', {
    'method': 'GET',
    'headers': {
      'x-rapidapi-key': `${process.env.TICKER_API_KEY}`,
      'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    }
  })
    .then(response => response.json())
    .then(({ quotes }) => quotes.map(quote => ({
      symbol: quote.symbol,
      exchange: quote.exchange,
    })))
    .catch(err => console.error(err));
     
};


//  
