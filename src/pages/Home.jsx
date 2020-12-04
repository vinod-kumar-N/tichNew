import React, { useEffect, useState } from 'react';
import HomeHeader from '@Uilib/homeHeader';
import Header from '@Uilib/header';
import Footer from '@Uilib/footer';
import HomeComp from '@Components/homeComp';

const Home = () => {
  const [showHomeHeader, setHeadderVisibility] = useState(true);
  const handleScroll = () => {
    window.pageYOffset > 150
      ? setHeadderVisibility(false)
      : setHeadderVisibility(true);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return function cleanup() {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  return (
    <div>
      {showHomeHeader ? <HomeHeader /> : <Header />}
      <HomeComp />
      <Footer />
    </div>
  );
};

export default Home;
