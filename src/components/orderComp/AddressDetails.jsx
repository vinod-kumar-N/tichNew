import React, { useState, Fragment, useRef, useCallback } from 'react';
import AddressForm from './AddressSelection/AddressForm';
import PersonalActions from '@Actions/personalActions';
import AccountActions from '@Actions/accountActions';
import OrderActions from '@Actions/orderActions';
import { useDispatch, connect, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { AddressTypes } from '@Utils/constants';
import PersonalService from '@Services/personalService';
import FormInput from '@Uilib/form/formInput';
import NxtPrevBtn from './NxtPrevBtn';


/**
 * Custom hook for getting previous value 
 * @param {state} value The item which you want to have previous value identified.
 */
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

/**
 * * Address Detail Component
 * This holds the complete state of the Sender and Receiver form.
 * * DONE: Saving Sender data
 * * DONE: Saving Receiver data
 * TODO: Start posting the data to STEP 2 API.
 *   */
const AddressDetails = ({ navigateTo }) => {

  let initialState = {
    AddressId: 0,
    AddressType: '',
    CustomerId: 0,
    FullName: '',
    Email: '',
    ContactNumber: '',
    CountryLong: '',
    CountryShort: '',
    CityLong: '',
    CityShort: '',
    PostalCodeLong: '',
    PostalCodeShort: '',
    StateLong: '',
    StateShort: '',
    AddressLine1: '',
    AddressLine2: '',
    SaveToMyAddress: true,
    NickName: ''
  };
  const dispatch = useDispatch();
  const { store_senderForm, store_receiverForm, store_orderDetails } = useSelector(({ OrderReducers }) => ({
    store_senderForm: OrderReducers.senderAddressForm,
    store_receiverForm: OrderReducers.recipeintAddressForm,
    store_orderDetails: OrderReducers.recipeintAddressForm
  })
  );
  const [senderAddressForm, setsenderAddressForm] = useState(store_senderForm || initialState);
  const [recipeintAddressForm, setrecipeintAddressForm] = useState(store_receiverForm || initialState);
  const [localState, setLocalState] = useState(store_orderDetails || {
    OrderId: 0,
    KeepMeAnonymous: false,
    CustomerId: 0
  })
  const prevData = usePrevious(senderAddressForm);

  const { userAddresses } = useSelector(({ AccountReducers }) => AccountReducers);
  const { CustomerId } = useSelector(({ AuthReducers }) => AuthReducers.userInfo);
  const countries = useSelector(({ PersonalReducers }) => PersonalReducers.countries);
  const countryOptions = countries.map((country) => ({ label: country.CountryName, value: country.ISO2, countryCode: country.CountryCode }));
  let instancesCount = 0

  useEffect(() => {
    if (localState.CustomerId === 0) {
      setLocalState((state) => ({ ...state, CustomerId }))
    }
    // * Load first Address dropdown for Sender Address component
    const { getUserAddresses } = AccountActions;
    dispatch(getUserAddresses(CustomerId));
    /** Load Country dropdown data */
    const { getCountryList } = PersonalActions;
    if (countries.length === 0)
      dispatch(getCountryList());
    instancesCount += 1
    console.log({ instancesCount })
    return () => {
      instancesCount -= 1
      console.log({ instancesCount })
    }
  }, []);

  /**
   * 
   * @param {AddressTypes} formType will be 'SENDER' or 'RECIEVER'
   * @param {javascrpt:event} event this will be the event item.
   */
  const handleFormChanges = (formType, event) => {
    const { name, value, type, checked } = event.target;
    const isCheckbox = type === 'checkbox';
    const isSenderForm = formType === AddressTypes.SENDER;
    let form = isSenderForm ? { ...senderAddressForm } : { ...recipeintAddressForm };
    if (!isCheckbox) form[name] = value;
    else form[name] = checked;

    switch (name) {
      case 'PostalCodeLong':
        if (prevData && form.CountryShort !== '' && (prevData.PostalCodeLong !== '' || (value.length >= 3 && prevData.PostalCodeLong !== senderAddressForm.PostalCodeLong)))
          fetchStateDetails(formType, value, form.CountryShort);
        break;
      default:
        break;
    }
    setStateByType(formType, form);
  }

  const setStateByType = (formType, form) => {
    switch (formType) {
      case AddressTypes.SENDER:
        setsenderAddressForm((state) => ({ ...state, ...form }))
        break;
      case AddressTypes.RECEIVER:
        setrecipeintAddressForm((state) => ({ ...state, ...form }))
        break;
      default:
        break;
    }
  }

  const fetchStateDetails = async (formType, latestPostalCode, CountryShort) => {
    let result = await PersonalService.getGeoCodeData(latestPostalCode, CountryShort);
    let addressData = {
      CityShort: result.City_Short || result.City_long || '',
      CityLong: result.City_long || '',
      PostalCodeShort: result.PostalCode_short || '',
      StateLong: result.State_long || '',
      StateShort: result.State_short || '',
    };
    setStateByType(formType, addressData);
  }
  /**
   * 
   * @param {AddressTypes} formType Will be 'SENDER' or 'RECIVER' based on template.
   * @param {DropdownOption} option Will be option item in dropdown.
   * @param {fieldName} name will the name attribute mentioned on field.
   * @param {boolean} addressdropdown if Address this will be 'true'.
   */
  const handleSelectChange = (formType, option, name, addressdropdown) => {
    const isSenderForm = formType === AddressTypes.SENDER;
    let form = isSenderForm ? { ...senderAddressForm } : { ...recipeintAddressForm };
    form[name] = option.value;
    if (name === 'CountryShort') {
      form.CountryLong = option.label;
      form.PostalCodeLong = '';
    }
    if (name === 'AddressId') {
      let selected = userAddresses.filter(address => address.AddressId == option.value);
      if (selected && selected.length > 0)
        form = { ...form, ...selected[0] };
    }
    setStateByType(formType, form);
  };

  const handleSubmit = () => {
    setLocalState((state) => ({ ...state, CustomerId }))
    const { addUpdateAddress } = AccountActions;

    if (senderAddressForm.SaveToMyAddress) {
      dispatch(addUpdateAddress({ ...senderAddressForm, CustomerId, AddressType: AddressTypes.SENDER }))
    }

    if (recipeintAddressForm.SaveToMyAddress) {
      dispatch(addUpdateAddress({ ...recipeintAddressForm, CustomerId, AddressType: AddressTypes.RECEIVER }))
    }

    const { addStep2Details } = OrderActions;
    dispatch(addStep2Details({ recipeintAddressForm, senderAddressForm, orderDetails: localState }))

    navigateTo(3)
  }

  const { KeepMeAnonymous, OrderId } = localState;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 title-wrap">
          <h3>Sender’s Address</h3>
          <AddressForm addressType={AddressTypes.SENDER}
            userAddresses={userAddresses}
            countryOptions={countryOptions}
            form={senderAddressForm}
            onChangeValue={handleFormChanges}
            onSelectChange={handleSelectChange}
          />
        </div>
        <div className="col-md-6 title-wrap">
          <h3>Recipient’s Address</h3>
          <AddressForm addressType={AddressTypes.RECEIVER}
            userAddresses={userAddresses}
            countryOptions={countryOptions}
            form={recipeintAddressForm}
            onChangeValue={handleFormChanges}
            onSelectChange={handleSelectChange}
          />
        </div>
        <div className="col-md-12">
          <a className={'btn btn-primary '}
            onClick={(e) => setLocalState({ ...localState, KeepMeAnonymous: !KeepMeAnonymous })}>
            {KeepMeAnonymous && <i class="fas fa-check"></i>} Keep me anonymous
            </a>
        </div>
        <div className="form-group col-md-12">

          <FormInput type="text" value={OrderId} name="OrderId" placegolder="orderID" label="OrderId (temperary)"
            onChange={((e) => setLocalState({ ...localState, OrderId: e.target.value }))} />

        </div>
        <div className="col-md-12 yellow-saperator"></div>
        <div className="col-md-12 next-prev-btn-container d-none">
          <a className="btn btn-primary white-btn btn-prev" onClick={() => navigateTo(1)} >Back</a>
          <a className="btn btn-primary blue-btn btn-next" onClick={handleSubmit}>Add Ons</a>
        </div>
        <div className="col-12 border-top border-warning pt-3">
          <NxtPrevBtn
            previous="Back"
            next="Add Ons"
          />
        </div>
      </div>
    </div>
  );

};

export default AddressDetails;
