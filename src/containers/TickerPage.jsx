import React, { useEffect, useState } from 'react';
import Tickerlist from '../components/ticker/Tickerlist';
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
    // <div>hey</div>
    <Tickerlist quotes={quotes}/>
  );

};
export default TickerPage;
