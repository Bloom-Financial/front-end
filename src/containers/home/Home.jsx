import React from 'react';
import Header from '../../components/app/header/Header';

// import AlpacaForm from '../../components/forms/AlpacaForm';
// import News from '../../components/app/news/News';

import News from '../../components/app/news/News';

import UserPagePositions from '../../containers/UserPaperPositions';
// import Ticker from '../../components/app/ticker/Ticker';
// import { useParams } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Header />
      {/* <AlpacaForm /> */}

function Home() {


  return (
    <div>
      <Header />
      {/* <News /> */}
      <UserPagePositions />
    </div>
  );
}

export default Home;
