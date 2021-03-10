import React from 'react';
import PropTypes from 'prop-types';
import Ticker from './Ticker';

function Tickerlist({ quotes }) {
  // console.log(quotes);
  const quoteElements = quotes.map((quote) => (
    <li key={quote.quote}>
      <Ticker 
        quotes={quote.quote}
      />
    </li>
  ));
    
  return <ul data-testid="quotes">quotes:{quoteElements}</ul>;
}

Tickerlist.propTypes = {
  quotes: PropTypes.array.isRequired
};

export default Tickerlist;

