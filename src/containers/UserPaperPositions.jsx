/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import UserPaperPositionList from '../components/positions/UserPaperPositionList';
import { getUserPaperPositions } from '../services/alpacaGetUserPortfolioAPI';
// import { PositionChart } from '../components/positions/positionsChart';
import AlpacaForm from '../components/forms/AlpacaForm';
import { useAccessToken } from '../state/authProvider';

function UserPaperPositions() {
  const [paperPositions, setPaperPositions] = useState([]);
  const [loading, setLoading] = useState(true);

  const accessToken = useAccessToken();

  useEffect(() => {
    if (!accessToken) return;
    getUserPaperPositions(accessToken).then((res) => {
      setPaperPositions(res), setLoading(false);
    });
  }, [accessToken]);

  if (loading) return <h1>Loading...</h1>;
  return (
    <>
      <AlpacaForm />
      {/* <PositionChart /> */}
      <UserPaperPositionList paperPositions={paperPositions} />
    </>
  );
}

export default UserPaperPositions;
