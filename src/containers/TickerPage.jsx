import React, { useEffect, useState } from 'react';
//import Tickerlist from '../components/ticker/Tickerlist';
import { getFetch } from '../services/tickerApi';
import Ticker from '../components/ticker/Ticker';
import styles from './TickerPage.css';

const TickerPage = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    getFetch()
      .then((quotes) => {
        setQuotes(quotes);
      });
  }, []);

  return (
    <div className={styles.tick}>
      <Ticker {...quotes}/>
    </div>
  );

};
export default TickerPage;
