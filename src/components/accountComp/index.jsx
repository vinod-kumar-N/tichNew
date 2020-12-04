import React from 'react';
import './style.scss';
import VerticalTabs from '@Uilib/verticalTabs';
import Account from './Account';
import MyOrders from './MyOrders';
import MyAddresses from './MyAddresses';
import BulkOrderUpload from './BulkOrderUpload';

const AccountComp = () => {
  const content = [
    {
      title: 'Account',
      body: <Account />,
    },
    {
      title: 'My Orders',
      body: <MyOrders />,
    },
    {
      title: 'My Addresses',
      body: <MyAddresses />,
    },
    // {
    //   title: 'Bulk Order Upload',
    //   body: <BulkOrderUpload />,
    // },
  ];
  return (
    <div className="account-comp-wrapper">  {/*header-clearance class removed by vikki*/} 
      <VerticalTabs content={content} defaultActiveTab={2} />
    </div>
  );
};

export default AccountComp;
