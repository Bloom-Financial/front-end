import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserPaperPosition.css';

const UserPaperPosition = ({ symbol, qty, market_value }) => (
  <dd className={styles.container}>
    <h1 className={styles.symbol}>{symbol}</h1>
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
