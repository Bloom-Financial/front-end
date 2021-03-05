import React from 'react';
import Header from '../../components/app/header/header';
import News from '../../components/app/news/News';
import Positions from '../../components/app/positions/Positions';
import Search from '../../components/app/search/Search';
import Ticker from '../../components/app/ticker/Ticker';

function Home() {
  return (
    <div>
      <Header/>
      <Ticker/>
      <News/>
      <Search/>
      <Positions/>
    </div>
  );
}

export default Home;
