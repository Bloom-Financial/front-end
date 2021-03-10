/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { newPaperPosition } from '../actions/alpacaActions';
import { getPaperPositions } from '../selectors/alpacaSelector';
import { getUserPaperPositions } from '../services/alpacaGetUserPortfolioAPI';
import { useDispatch, useSelector } from '../state/AlpacaProvider';
import { useAccessToken } from '../state/authProvider';
import UserPaperPositionList from '../components/positions/UserPaperPositionList';
import AlpacaForm from '../components/forms/alpacaForm';

function UserPaperPositions() {
  const paperPositions = useSelector(getPaperPositions);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const accessToken = useAccessToken();

  useEffect(() => {
    if (!accessToken) return;
    getUserPaperPositions(accessToken).then((res) => {
      dispatch(newPaperPosition(res)), setLoading(false);
    });
  }, [accessToken]);

  if (loading) return <h1>Loading...</h1>;
  return (
    <>
      <AlpacaForm />
      <UserPaperPositionList paperPositions={paperPositions} />
    </>
  );
}

export default UserPaperPositions;
