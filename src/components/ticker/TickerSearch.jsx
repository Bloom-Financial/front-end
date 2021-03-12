import React from 'react';
import PropTypes from 'prop-types';

const TickerSearch = ({ search, onChange }) => (
  <input
    // className={}
    type="text"
    placeholder="Search here..."
    value={search}
    onChange={onChange}
  />
);

TickerSearch.propTypes = {
  search: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TickerSearch;
