import React from 'react';
import PropTypes from 'prop-types';

function Ticker({ regularMarketPrice, symbol, previousClose }) {
  return (
    <>
      <p>Symbol: { symbol } </p>
      <p>Close: {regularMarketPrice}</p>
      <p>Open: {previousClose}</p>
     
    </>
  );
}

// Ticker.propTypes = {
//   quotes: PropTypes.array.isRequired
// };

export default Ticker;




