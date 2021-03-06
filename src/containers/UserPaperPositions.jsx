/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import UserPaperPositionList from '../components/positions/UserPaperPositionList';
import { getUserPaperPositions } from '../services/alpacaGetUserPortfolioAPI';
import { PositionChart } from '../components/positions/positionsChart';

function UserPaperPositions() {
  const [paperPositions, setPaperPositions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserPaperPositions().then((res) => {
      setPaperPositions(res), setLoading(false);
    });
  }, []);

  if (loading) return <h1>Loading...</h1>;
  return (
    <>
      <PositionChart />
      <UserPaperPositionList paperPositions={paperPositions} />
    </>
  );
}

export default UserPaperPositions;
