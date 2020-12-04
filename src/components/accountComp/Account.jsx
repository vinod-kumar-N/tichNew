import React, { useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormInput from '@Uilib/form/formInput';
import Button from '@Uilib/button';
import AccountActions from '@Actions/accountActions';
import ChangePassword from '../changePassword';

export default function Account() {
  const [isEditEnabled, setEditState] = useState(false);
  const { CustomerId, FirstName, LastName, Mobile, Email } = useSelector(
    ({ AuthReducers }) => AuthReducers.userInfo,
  );

  const dispatch = useDispatch();
  const [fNameValue, setfNameValue] = useState(FirstName);
  const [lNameValue, setlNameValue] = useState(LastName);
  const [emailValue, setemailValue] = useState(Email);
  const [mobileValue, setmobileValue] = useState(Mobile);
  const [passwordValue, setpasswordValue] = useState('');
  const fullNameHtml = FirstName && LastName && (
    <p>Full Name: {`${FirstName} ${LastName}`}</p>
  );
  const emailHtml = Email && <p>Email: {Email}</p>;
  const mobileHtml = Mobile && <p>Mobile: {Mobile}</p>;
  const changeEditMode = () => {
    setEditState(!isEditEnabled);
  };
  const saveAccountInfo = () => {
    const { updateUserAccount } = AccountActions;
    const payload = {
      CustomerId,
      FirstName: fNameValue,
      LastName: lNameValue,
      Mobile: mobileValue,
      Password: passwordValue,
      Email: emailValue,
    };
    dispatch(updateUserAccount(payload));
    changeEditMode();
  };
  const readOnlyHtml = (
    <Fragment>
      <h4>General Information</h4>
      {fullNameHtml}
      {emailHtml}
      {mobileHtml}
      <Button onClick={changeEditMode} label="Edit Information" />
    </Fragment>
  );
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'fNameValue':
        setfNameValue(value);
        break;
      case 'lNameValue':
        setlNameValue(value);
        break;
      case 'emailValue':
        setemailValue(value);
        break;
      case 'mobileValue':
        setmobileValue(value);
        break;
      case 'passwordValue':
        setpasswordValue(value);
        break;
      default:
        return '';
    }
  };

  const editibleHtml = (
    <div>
      <h4>Update your information and save</h4>
      <FormInput
        type="text"
        label="First Name"
        placeholder="Enter your first name"
        onChange={handleChange}
        value={fNameValue}
        name="fNameValue"
      />
      <FormInput
        type="text"
        label="Last Name"
        placeholder="Enter your last name"
        onChange={handleChange}
        value={lNameValue}
        name="lNameValue"
      />
      <FormInput
        type="text"
        label="Email"
        placeholder="Enter your email"
        onChange={handleChange}
        value={emailValue}
        name="emailValue"
      />
      <FormInput
        type="text"
        label="Mobile Number"
        placeholder="Enter mobile numbar"
        onChange={handleChange}
        value={mobileValue}
        name="mobileValue"
      />
      <FormInput
        type="password"
        label="Password"
        placeholder="Enter new password"
        onChange={handleChange}
        name="passwordValue"
      />
      <Button onClick={saveAccountInfo} label="Save Information" />
    </div>
  );

  return (
    <div className="container account-comp-wrapper">
      <div className="row">
        <div className="col-md-12">
          {isEditEnabled ? editibleHtml : readOnlyHtml}
        </div>
      </div>      
      <ChangePassword />
    </div>
  );
}
