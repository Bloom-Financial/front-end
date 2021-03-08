import React from 'react';
import PropTypes from 'prop-types';

function alpacaForm({ symbol, quantity, side, onSubmit }) {
  return (
    <div>
      <form>
        <input value={symbol} placeholder="symbol" type="text"/>
        <input value={quantity} placeholder="quantity" type="number"/>
        <select value={side}>
          <option value="buy">Buy</option>
          <option value="sell">Sell</option>
        </select> 
        <button onSubmit={onSubmit}>Submit</button>
      </form>
    </div>
  );
}

alpacaForm.propTypes = {
  symbol: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  side: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default alpacaForm;
