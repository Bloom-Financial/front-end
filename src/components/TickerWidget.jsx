import React, { useState } from 'react';
import Widget from 'react-tradingview-widget';


export default function TickerWidget() {
  const [symbol, setSymbol] = useState('MSFT');
  const [market, setMarket] = useState('NASDAQ');
  return (
    <div>
      <input onChange={e => setSymbol(e.target.value)}/>
      <select onChange={e => setMarket(e.target.value)}>
        <option value="NASDAQ">NASDAQ</option>
        <option value="NYSE">NYSE</option>
        <option value="AMEX">AMEX</option>
      </select>
      <Widget symbol={`${market}:${symbol}`} /> 

    </div>

  );
}
