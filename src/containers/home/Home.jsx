import React, { useState, useEffect } from 'react';
// import Header from '../../components/app/header/header';
// import News from '../../components/app/news/News';
import UserPagePositions from './UserPaperPositions';
// import Search from '../../components/app/search/Search';
// import Ticker from '../../components/app/ticker/Ticker';
import { useParams } from 'react-router-dom';
function Home({ location }) {
  const code = new URLSearchParams(location.search).get('code');


  const [token, setToken] = useState('');
  useEffect(() => {
    setToken(code);
  }), [];
  

  console.log(code, 'home page');

  return (
    <div>
      {/* <Header/>
      <Ticker/>
      <News />
      <Search/> */}
      {/* <UserPagePositions /> */}
      I am here
    </div>
  );
}

export default Home;
