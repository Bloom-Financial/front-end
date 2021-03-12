import React, { useState } from 'react';
import Widget from 'react-tradingview-widget';
import styles from './Widget.css';

export default function TickerWidget() {
  const [symbol, setSymbol] = useState('MSFT');
  const [market, setMarket] = useState('NASDAQ');
  return (

    <div className={styles.Container}>
      <select 
        className={styles.input} 
        onChange={e => setMarket(e.target.value)}>
        <option value="NASDAQ">NASDAQ</option>
        <option value="NYSE">NYSE</option>
        <option value="AMEX">AMEX</option>
      </select>
      <input 
        className={styles.input} 
        onChange={e => setSymbol(e.target.value)}/>
      <Widget className={styles.widget} symbol={`${market}:${symbol}`} /> 

    </div>

  );
}
