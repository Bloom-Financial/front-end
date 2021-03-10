import React from 'react';
import PropTypes from 'prop-types';
import UserPaperPosition from './UserPaperPosition';
import styles from './UserPaperPositionList.css';

const UserPaperPositionList = ({ paperPositions }) => {
  const paperPositionElements = paperPositions.map((paperPosition) => (
    <li className={styles.container} key={paperPosition.asset_id}>
      <UserPaperPosition {...paperPosition} />
    </li>
  ));
  return (
    <>
      <h1 className={styles.title}>My Portfolio:</h1>
      <ul>{paperPositionElements}</ul>
    </>
  );
};

UserPaperPositionList.propTypes = {
  paperPositions: PropTypes.arrayOf(
    PropTypes.shape({
      symbol: PropTypes.string.isRequired,
      qty: PropTypes.string.isRequired,
      market_value: PropTypes.string.isRequired,
    })
  ),
};
export default UserPaperPositionList;
