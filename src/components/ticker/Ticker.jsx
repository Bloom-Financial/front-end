import React from 'react';
import PropTypes from 'prop-types';

function Ticker({ quotes }) {
  return (
    <div>
      {quotes}   
    </div>
  );
}

Ticker.propTypes = {
  quotes: PropTypes.array
};

export default Ticker;




