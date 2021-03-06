import React, { useEffect, useState } from 'react';
import { getTickers } from '../services/tickerAPI';
import TickerList from '../components/app/ticker/TickerList';


const TickerDetailPage = () => {
  const [ticker, setTicker] = useState({});
  const [loading, setLoading] = useState(true);

    

  useEffect(() => {

    getTickers()
      .then((ticker) => {
        setTicker(ticker);
        setLoading(false);
      });
  }, []);

  if(loading) return <h1>Loading</h1>;
  return <TickerList tickers={ticker} />;

};

export default TickerDetailPage;
