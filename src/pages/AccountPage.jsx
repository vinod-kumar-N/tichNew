import React from 'react';
import Header from '@Uilib/header';
import Footer from '@Uilib/footer';
import AccountComp from '@Components/accountComp';
import BgImg from '../components/bgImg';
const AccountPage = () => {
  return (
    <div>
      <Header />
      <BgImg heading="Hello, Ankit" class="text-capitalize text-white" />
      <AccountComp />
      <Footer />
    </div>
  );
};
export default AccountPage;
