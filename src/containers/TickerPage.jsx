import React, { useEffect, useState } from 'react';
import Ticker from '../components/ticker/Ticker';
import { getAll } from '../services/tickerApi';

const TickerPage = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    getAll()
      .then((quotes) => {
        setQuotes(quotes);
      });
  }, []);
  const tickerList = quotes.map(quote => (
    <li key={quote}><Ticker {...quote}/></li>
  ));
  return (
    <ul>{tickerList}</ul>
  );
};
export default TickerPage;
