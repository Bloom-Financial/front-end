import React, { useState, useEffect } from 'react';
import Header from '../../components/app/header/Header';
// import News from '../../components/app/news/News';
import UserPagePositions from '../../containers/UserPaperPositions';
// import Search from '../../components/app/search/Search';
// import Ticker from '../../components/app/ticker/Ticker';
// import { useParams } from 'react-router-dom';
function Home() {
  return (
    <div>
      <Header />

      <UserPagePositions />
    </div>
  );
}

export default Home;
