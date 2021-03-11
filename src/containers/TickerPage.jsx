import React, { useEffect, useState } from 'react';
import Ticker from '../components/ticker/Ticker';
import { getFetch } from '../services/tickerApi';

const TickerPage = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    getFetch()
      .then((quotes) => {
        setQuotes(quotes);
      });
  }, []);
  
  return (
    
    <Ticker {...quotes}/>
    
  );

};
export default TickerPage;
