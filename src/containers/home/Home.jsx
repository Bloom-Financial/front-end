import React, { useState, useEffect } from 'react';
import Header from '../../components/app/header/Header';
import News from '../../components/app/news/News';
import UserPagePositions from '../../containers/UserPaperPositions';
// import Ticker from '../../components/app/ticker/Ticker';
// import { useParams } from 'react-router-dom';
function Home({ location }) {
  // const token = new URLSearchParams(location.search).get('code');

  // const [accessToken, setAccessToken] = useState('');
  // useEffect(() => {
  //   setAccessToken(token);
  // }), [];

  return (
    <div>
      <Header />
      <News />
      <UserPagePositions />
    </div>
  );
}

export default Home;
