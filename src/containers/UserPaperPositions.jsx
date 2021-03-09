/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import UserPaperPositionList from '../components/positions/UserPaperPositionList';
import { getUserPaperPositions } from '../services/alpacaGetUserPortfolioAPI';
import { PositionChart } from '../components/positions/positionsChart';
import AlpacaForm from '../components/forms/AlpacaForm';

function UserPaperPositions() {
  const [paperPositions, setPaperPositions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    getUserPaperPositions(setAccessToken(accessToken)).then((res) => {
      setPaperPositions(res), setLoading(false);
    });
  }, []);

  if (loading) return <h1>Loading...</h1>;
  return (
    <>
      <AlpacaForm />
      <PositionChart />
      <UserPaperPositionList paperPositions={paperPositions} />
    </>
  );
}

export default UserPaperPositions;
