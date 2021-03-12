/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Ticker.css';

function Ticker({ symbol, regularMarketPrice, previousClose }) {
  return (
    <>
      <div className={styles.Ticker}>
        <a>
          {symbol}
        </a>
        <a>
          {(regularMarketPrice).toFixed(2)}
        </a>
        <a style={{ color: (regularMarketPrice >= previousClose) ? 'green' : 'red' }}>
          {(regularMarketPrice - previousClose).toFixed(2)}
        </a>
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




