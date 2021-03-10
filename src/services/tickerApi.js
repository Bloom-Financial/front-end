/* eslint-disable max-len */
export const getFetch = async() => {

  return  await fetch('https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=tesla&region=US', {
    'method': 'GET',
    'headers': {
      'x-rapidapi-key': 'ccceef234dmsh9ec59b335a8b015p16f78ejsn109ac55c5fb8',
      'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    }
  })
    .then(response => response.json())
    .catch(err => console.error(err));
};
