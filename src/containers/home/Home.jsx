import React from 'react';
import Header from '../../components/app/header/header';
import NewsSearch from '../../components/app/news/NewsSearch';
import Positions from '../../components/app/positions/Positions';
import Search from '../../components/app/search/Search';
import Ticker from '../../components/app/ticker/Ticker';

function Home() {
  return (
    <div>
      <Header/>
      <Ticker/>
      <NewsSearch />
      <Search/>
      <Positions/>
    </div>
  );
}

export default Home;
