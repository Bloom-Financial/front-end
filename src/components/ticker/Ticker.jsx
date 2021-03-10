import React from 'react';
import PropTypes from 'prop-types';

function Ticker({ quotes }) {
  return (
    <>
      {    quotes.symbol   }
    
      {quotes.exchange}
    </>
  );
}

Ticker.propTypes = {
  quotes: PropTypes.array.isRequired
};

export default Ticker;




