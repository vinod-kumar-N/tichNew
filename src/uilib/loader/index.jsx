import React, { Fragment } from 'react';
import './style.scss';
import LoaderIcon from '@Images/loader.svg';
import { useSelector } from 'react-redux';

const Loader = () => {
  const { loaderCount = 0 } = useSelector(
    ({ LoaderReducers }) => LoaderReducers,
  );
  return (
    <Fragment>
      {loaderCount > 0 && (
        <div className="loader-container">
          <img src={LoaderIcon} alt="loading icon" />
        </div>
      )}
    </Fragment>
  );
};
export default Loader;
