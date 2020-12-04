import React, { useState, Fragment } from 'react';
import FormInput from '@Uilib/form/formInput';
// import Button from '@Uilib/button';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import AccountActions from '@Actions/accountActions';

/**
 * AddEditAddress
 *
 * @param {object} props
 * @returns {JSX} element
 */
function AddEditAddress(props) {
  const dispatch = useDispatch();
  const { selectedAddressId, changeEditableState } = props;
  const userAddresses = useSelector(
    ({ AccountReducers }) => AccountReducers.userAddresses,
  );

  const { CustomerId: custIdForNewAddr } = useSelector(
    ({ AuthReducers }) => AuthReducers.userInfo,
  );

  const selectedAddress =
    userAddresses &&
    userAddresses.find((address) => address.AddressId === selectedAddressId);

  const saveAddressInfo = () => {
    if (!address.CustomerId) {
      address.CustomerId = custIdForNewAddr;
    }
    const { addUpdateAddress } = AccountActions;
    dispatch(addUpdateAddress(address));
    changeEditableState();
  };
  const [address, setAddress] = useState(selectedAddress);

  const handleChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (option, name) => {
    setAddress({
      ...address,
      [name]: option.value,
    });
  };
  const addressTypeOptions = [
    { value: 'SENDER', label: 'Sender' },
    { value: 'RECEIVER', label: 'Receiver' },
  ];
  const {
    AddressId,
    CustomerId,
    AddressType,
    AddressLine1,
    AddressLine2,
    CityLong,
    CityShort,
    CountryLong,
    CountryShort,
    NickName,
    PostalCodeLong,
    PostalCodeShort,
    StateLong,
    StateShort,
  } = address || {};
  return (
    <Fragment>
      <div className="col-md-12">
        <button
          onClick={() => changeEditableState()}
          type="button"
          className="close"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <h4>
          {`${
            selectedAddressId ? 'Update your existing' : 'Add a new'
          } address and save
        `}
        </h4>
      </div>
      <div className="col-md-6">
        <label className="address-type-label">
          <span>Address Type</span>
          <Select
            value={addressTypeOptions.find(
              ({ value }) => value === AddressType,
            )}
            onChange={(option) => handleSelectChange(option, 'AddressType')}
            options={addressTypeOptions}
          />
        </label>
      </div>
      <div className="col-md-6">
        <FormInput
          type="text"
          label="Nick Name"
          placeholder="Enter Nick Name"
          onChange={handleChange}
          value={NickName}
          name="NickName"
        />
      </div>
      <div className="col-md-12">
        <FormInput
          type="text"
          label="Address Line 1"
          placeholder="Enter AddressLine1"
          onChange={handleChange}
          value={AddressLine1}
          name="AddressLine1"
        />
        <FormInput
          type="text"
          label="Address Line 2"
          placeholder="Enter AddressLine2"
          onChange={handleChange}
          value={AddressLine2}
          name="AddressLine2"
        />
      </div>
      <div className="col-md-6">
        <FormInput
          type="text"
          label="City Long"
          placeholder="Enter CityLong"
          onChange={handleChange}
          value={CityLong}
          name="CityLong"
        />
      </div>
      <div className="col-md-6">
        <FormInput
          type="text"
          label="City Short"
          placeholder="Enter CityShort"
          onChange={handleChange}
          value={CityShort}
          name="CityShort"
        />
      </div>
      <div className="col-md-6">
        <FormInput
          type="text"
          label="Country Long"
          placeholder="Enter Country Long"
          onChange={handleChange}
          value={CountryLong}
          name="CountryLong"
        />
      </div>
      <div className="col-md-6">
        <FormInput
          type="text"
          label="Country Short"
          placeholder="Enter Country Short"
          onChange={handleChange}
          value={CountryShort}
          name="CountryShort"
        />
      </div>
      <div className="col-md-6">
        <FormInput
          type="text"
          label="Postal Code Long"
          placeholder="Enter PostalCodeLong"
          onChange={handleChange}
          value={PostalCodeLong}
          name="PostalCodeLong"
        />
      </div>
      <div className="col-md-6">
        <FormInput
          type="text"
          label="Postal Code Short"
          placeholder="Enter PostalCodeShort"
          onChange={handleChange}
          value={PostalCodeShort}
          name="PostalCodeShort"
        />
      </div>
      <div className="col-md-6">
        <FormInput
          type="text"
          label="State Long"
          placeholder="Enter State Long"
          onChange={handleChange}
          value={StateLong}
          name="StateLong"
        />
      </div>
      <div className="col-md-6">
        <FormInput
          type="text"
          label="StateShort"
          placeholder="Enter State Short"
          onChange={handleChange}
          value={StateShort}
          name="StateShort"
        />
      </div>
      <div className="col-md-12">
        <Button onClick={() => changeEditableState()} variant="light">
          {`< Cancel`}{' '}
        </Button>{' '}
        <Button onClick={saveAddressInfo} variant="success">
          Save Address
        </Button>
      </div>
    </Fragment>
  );
}

export default AddEditAddress;
