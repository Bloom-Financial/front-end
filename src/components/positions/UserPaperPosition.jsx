import React from 'react';
import PropTypes from 'prop-types';

const UserPaperPosition = ({ symbol, qty, market_value }) => (
  <dd>
    <h1>{symbol}</h1>
    <h2>{qty}</h2>
    <h2>{market_value}</h2>
  </dd>
);

export default UserPaperPosition;

UserPaperPosition.propTypes = {
  symbol: PropTypes.string.isRequired,
  qty: PropTypes.string.isRequired,
  market_value: PropTypes.string.isRequired,
};
