import React, { useEffect, useState } from 'react';
import Tickerlist from '../components/ticker/Tickerlist';
import { getFetch } from '../services/tickerApi';

const TickerPage = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(async() => {
    await getFetch()
      .then((quotes) => {
        setQuotes(quotes);
      });
  }, []);

  return (
    <Tickerlist quotes={quotes}/>
  );

};
export default TickerPage;
