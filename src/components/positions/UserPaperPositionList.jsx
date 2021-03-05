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

UserPaperPositionList.propTypes = {};

export default UserPaperPositionList;
