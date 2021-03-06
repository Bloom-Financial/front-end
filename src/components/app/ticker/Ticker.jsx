import React from 'react';
import PropTypes from 'prop-types';

const Ticker = ({ ticker, name, market, locale, type, currency, active, primaryExch, url }) => (

  
  <figure>
    <figcaption>
      <p>{ticker}</p>
      <p>{name}</p>
      <p>{market}</p>
      <p>{locale}</p>
      <p>{type}</p>
      <p>{currency}</p>
      <p>{active}</p>
      <p>{primaryExch}</p>
      <p>{url}</p>
      
    </figcaption>
  
  </figure>
);

Ticker.propTypes = {
  ticker: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  market: PropTypes.string.isRequired,
  local: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  primaryExch: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Ticker;

