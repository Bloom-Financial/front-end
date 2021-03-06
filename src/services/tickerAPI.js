export const getTickers = () => {
 
  return fetch(
    `https://api.polygon.io/v2/reference/tickers?sort=ticker&perpage=50&page=1&apiKey=xAwYuU4o13Zl6SYv1piHrpap_00ywWIE`
  )
    .then((res) => res.json())
    
    .then(({ tickers }) =>
  
      tickers.map((ticker) => ({
      
        ticker: ticker.ticker,
        name: ticker.name,
        market: ticker.market,
        locale: ticker.locale,
        type: ticker.type,
        currency: ticker.currency,
        active: ticker.active,
        primaryExch: ticker.primaryExch,
        url: ticker.url
  

      })));
};
