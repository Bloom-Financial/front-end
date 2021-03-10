import React from 'react';
import PropTypes from 'prop-types';
import { requestNewPaperOrder } from '../../services/alpacaOrders';

function AlpacaForm({ symbol, qty, side, type, timeInForce }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    requestNewPaperOrder(e.target.value);
  };

  return (
    <div>
      <form>
        <input value={symbol} placeholder="symbol" type="text" />
        <input value={qty} placeholder="qty" type="number" />
        <select value={side}>
          <option value="buy">Buy</option>
          <option value="sell">Sell</option>
        </select>
        <select value={type}>
          <option value="market">Market</option>
          <option value="limit">Limit</option>
          <option value="stop">Stop</option>
          <option value="stopLimit">Stop Limit</option>
        </select>
        <select value={timeInForce}>
          <option value="day">Day</option>
          <option value="onClose">On Close</option>
        </select>
        <button onSubmit={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

AlpacaForm.propTypes = {
  symbol: PropTypes.string.isRequired,
  qty: PropTypes.string.isRequired,
  side: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  timeInForce: PropTypes.string.isRequired,
};

export default AlpacaForm;
