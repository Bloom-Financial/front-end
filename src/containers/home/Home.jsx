import React from 'react';
import Header from '../../components/app/header/Header';
import News from '../../components/app/news/News';
import UserPagePositions from '../../containers/UserPaperPositions';
// import TickerWidget from '../../components/TickerWidget';


function Home() {
  return (
    <div>
      <Header />
      <UserPagePositions />
      // <TickerWidget />
      <News />
    </div>
  );
}

export default Home;
