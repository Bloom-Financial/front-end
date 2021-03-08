import React from 'react';

function AlpacaForm({ symbol, quantity, side }) {
  const handleSubmit = (e) => {
    e.target.value;
  };

  return (
    <div>
      <form>
        <input value={symbol} placeholder="symbol" type="text"/>
        <input value={quantity} placeholder="quantity" type="number"/>
        <select value={side}>
          <option value="buy">Buy</option>
          <option value="sell">Sell</option>
        </select> 
        <button onSubmit={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default AlpacaForm;
