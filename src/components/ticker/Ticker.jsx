import React from 'react';
import PropTypes from 'prop-types';

function Ticker({ symbol, regularMarketPrice, previousClose }) {
  console.log(symbol, 'slb')
  return (
    <>
      {symbol}
      {previousClose}
      {regularMarketPrice}
    </>
  );
}

// Ticker.propTypes = {
//   quotes: PropTypes.array.isRequired
// };

export default Ticker;




