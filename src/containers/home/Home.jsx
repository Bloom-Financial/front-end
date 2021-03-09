import React, { useState, useEffect } from 'react';
// import Header from '../../components/app/header/header';
// import News from '../../components/app/news/News';
import UserPagePositions from '../../containers/UserPaperPositions';
// import Search from '../../components/app/search/Search';
// import Ticker from '../../components/app/ticker/Ticker';
// import { useParams } from 'react-router-dom';
function Home({ location }) {
  const token = new URLSearchParams(location.search).get('code');

  const [accessToken, setAccessToken] = useState('');
  useEffect(() => {
    setAccessToken(token);
  }),
    [];

  console.log(token, 'home page');

  return (
    <div>
      {/* <Header/>
      <Ticker/>
      <News />
      <Search/> */}
      <UserPagePositions />
    </div>
  );
}

export default Home;
