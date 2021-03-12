/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

function Ticker({ symbol, regularMarketPrice, previousClose }) {
  return (
    <>
      <div>
        {symbol}
      </div>
      <div>
        {(regularMarketPrice).toFixed(2)}
      </div>
      <div style={{ color: (regularMarketPrice >= previousClose) ? 'green' : 'red' }}>
        {(regularMarketPrice - previousClose).toFixed(2)}
      </div>
    </>
  );
}

Ticker.propTypes = {
  symbol: PropTypes.string.isRequired,
  regularMarketPrice: PropTypes.string.isRequired,
  previousClose: PropTypes.string.isRequired
};

export default Ticker;




