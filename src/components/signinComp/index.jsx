import React from 'react';
import AccountEntryPanel from '@Components/accountEntryPanel';
import NavigateToSignUp from './NavigateToSignUp';
import SignInForm from './SignInForm';

export default function () {
  return (
    <div>
      <AccountEntryPanel
        leftComp={<SignInForm />}
        rightComp={<NavigateToSignUp />}
      />
    </div>
  );
}