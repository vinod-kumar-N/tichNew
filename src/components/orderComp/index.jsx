import React, { Fragment, useState } from "react";
import LetterMessage from "./LetterMessage";
import AddressDetails from './AddressDetails';
import UnderConstruction from './UnderConstruction';
import AdOn from './AddOns';
import Confirmation from './Confirmation';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Tab from '@material-ui/core/Tab';
// import TabContext from '@material-ui/lab/TabContext';
// import TabList from '@material-ui/lab/TabList';
// import TabPanel from '@material-ui/lab/TabPanel';

const OrderComp = () => {
  const [tabValue, setTabValue] = useState(4);
  const availableTabs = [
    {
      tabIndex: 1,
      label: 'Your Message',
      component: 'LetterMessage',
      // body: <UnderConstruction name={'Your Message'} />
    },
    {
      tabIndex: 2,
      label: `Recipients's Address`,
      component: 'AddressDetails',
      // body: <RecipientAddress />
    },
    {
      tabIndex: 3,
      label: 'Add ons',
      component: 'AddOns',
      // body: <UnderConstruction name={'Add ons'} />
    },
    {
      tabIndex: 4,
      label: 'Confirmation',
      component: 'Confirmation',
      // body: <UnderConstruction name={'Confirmation'} />
    },
  ]

  const getComponent = (item) => {
    switch (item.component) {
      case 'AddressDetails':
        return AddressDetails;
      case 'LetterMessage':
        return LetterMessage;
      case 'AddOns':
        return AdOn;
        case 'Confirmation':
          return Confirmation;
      case 'UnderConstruction':
        return UnderConstruction;
      default:
        return <div />
    }
  }
  const handleChange = (newValue) => {
    setTabValue(newValue);
  };
  return (
    <Fragment>
      <section className='cta-form-steps-wrap'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12 title-section'>
              <h1>Lets starts composing your letter lorem ipsum - {tabValue}</h1>
            </div>
            {
              availableTabs.map((item) =>
                <div className={`col-sm-3 form-step ${tabValue == item.tabIndex ? 'active-step' : ''}`} key={item.tabIndex} onClick={() => handleChange(item.tabIndex)}>
                  <p>
                    <span>0{item.tabIndex}</span>{item.label}
                  </p>
                </div>
              )
            }
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          {availableTabs.map((tab) => {
            const { tabIndex, label } = tab;
            if (tabValue == tabIndex)
              return React.createElement(getComponent(tab), {
                key: tabIndex,
                currentIndex: tabIndex,
                moduleName: label,
                availableTabs,
                navigateTo: (e) => { setTabValue(e) }
              })
          })}
        </div>
      </section>

    </Fragment>
  );
};

export default OrderComp;
