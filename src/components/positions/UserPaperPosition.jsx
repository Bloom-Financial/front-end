import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserPaperPosition.css';

const UserPaperPosition = ({ symbol, qty, market_value, current_price }) => (
  <dd className={styles.container}>
    <a className={styles.symbol}>Stock: {symbol}</a>
    <a className={styles.qty}>Qty: {qty}</a>
    <a className={styles.value}>Market Value: {market_value}</a>
    <a className={styles.price}>Current Price: {current_price}</a>
  </dd>
);

export default UserPaperPosition;

UserPaperPosition.propTypes = {
  symbol: PropTypes.string.isRequired,
  qty: PropTypes.string.isRequired,
  market_value: PropTypes.string.isRequired,
  current_price: PropTypes.string.isRequired,
};
