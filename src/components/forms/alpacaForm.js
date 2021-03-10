/* eslint-disable max-len */
import React, { useState } from 'react';
import { requestNewPaperOrder } from '../../services/alpacaOrders';
import { useAccessToken } from '../../state/authProvider';
import { 
  newPaperPosition
} from '../../actions/alpacaActions';
import { useDispatch } from '../../state/AlpacaProvider';
import { getUserPaperPositions } from '../../services/alpacaGetUserPortfolioAPI';

function AlpacaForm() {
  const dispatch = useDispatch();
  const accessToken = useAccessToken();

  const [symbol, setSymbol] = useState('');
  const [qty, setQty] = useState('');
  const [side, setSide] = useState('buy');
  const [order, setOrder] = useState('market');
  const [timeInForce, setTimeInForce] = useState('day');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const alpacaData = {
      symbol,
      qty,
      side,
      order,
      timeInForce
    };
    requestNewPaperOrder(accessToken, alpacaData)
      .then(() => getUserPaperPositions(accessToken))
      .then(res => dispatch(newPaperPosition(res)));
  };

  console.log(symbol,
    qty,
    side,
    order,
    timeInForce);

  return (
    <div>
      <form>
        <input onChange={e => setSymbol(e.target.value)} />
        <input onChange={e => setQty(e.target.value)} />
        <select onChange={e => setSide(e.target.value)}>
          <option value="buy">Buy</option>
          <option value="sell">Sell</option>
        </select>
        <select onChange={e => setOrder(e.target.value)}>
          <option value="market">Market</option>
          <option value="limit">Limit</option>
          <option value="stop">Stop</option>
        </select>
        <select onChange={e => setTimeInForce(e.target.value)}>
          <option value="day">Day</option>
          <option value="gtc">Good Until Canceled</option>
          <option value="opg">Market On Open</option>
          <option value="cls">Market On Close</option>
          <option value="ioc">Immediate Or Cancel</option>
          <option value="fok">Fill Or Kill</option>
        </select>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default AlpacaForm;
