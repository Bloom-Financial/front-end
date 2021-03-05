import React from 'react';
import PropTypes from 'prop-types';
import UserPaperPosition from './UserPaperPosition';

const UserPaperPositionList = ({ paperPositions }) => {
  const paperPositionElements = paperPositions.map((paperPosition) => (
    <li key={paperPosition.asset_id}>
      <UserPaperPosition {...paperPosition} />
    </li>
  ));
  return <ul>{paperPositionElements}</ul>;
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
