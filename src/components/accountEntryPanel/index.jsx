import React from 'react';
import './style.scss';

export default function index(props) {
  const { leftComp, rightComp } = props
  return (
    <div className="">
      <div className="">
        <div className="">{leftComp}</div>
        <div className="account-entry-right">{rightComp}</div>
      </div>
    </div>
  );
}
