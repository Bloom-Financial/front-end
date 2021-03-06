import React from 'react';
import PropTypes from 'prop-types';
import Ticker from './Ticker';



const TickerList = ({ tickers }) => {
  const tickerElements = tickers.map((ticker) => (
    <li key={ticker.text}>
      <Ticker 
        ticker={ticker.ticker}
        name={ticker.name}
        market={ticker.market}
        locale={ticker.locale}
        type={ticker.type}
        currency={ticker.type}
        active={ticker.active}
        primaryExch={ticker.primaryExch}
        url={ticker.url}
      />
    </li>
  ));
  return (
    <ul data-testid="tickers">{tickerElements}</ul>
  );
};

TickerList.propTypes = {
  tickers: PropTypes.arrayOf(
    PropTypes.shape({
      ticker: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      market: PropTypes.string.isRequired,
      locale: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      active: PropTypes.bool.isRequired,
      primaryExch: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  )

};

export default TickerList;

