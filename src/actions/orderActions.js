export const orderActionTypes = {
  PLACE_ORDER: 'place order',
  SET_STEP2: 'Set Step 2 details',
  SET_STEP2_TO_STORE: '',
};

class OrderActions {
  addStep2Details = (payload) => {
    const { senderAddressForm, recipeintAddressForm, orderDetails } = payload;

    return {
      type: orderActionTypes.SET_STEP2,
      addressDetails: {
        ...step2Payload(payload)
      },
      senderAddressForm,
      recipeintAddressForm,
      orderDetails
    }
  };

  setStep2DataToStore = (data) => {
    const { addressDetails, senderAddressForm, recipeintAddressForm, orderDetails } = data;
    return {
      type: orderActionTypes.SET_STEP2_TO_STORE,
      addressDetails,
      senderAddressForm,
      recipeintAddressForm,
      orderDetails
    }
  }
}

export default new OrderActions();

const step2Payload = (data) => {
  const { senderAddressForm, recipeintAddressForm, orderDetails } = data;

  const setReceiverData = (input) => {
    return {
      ReceiverFullName : input.FullName || '',
      ReceiverMobile : input.ContactNumber || '',
      ReceiverCountryLong : input.CountryLong || '',
      ReceiverCountryShort : input.CountryShort || '',
      ReceiverCityLong : input.CityLong || '',
      ReceiverCityShort : input.CityShort || '',
      ReceiverPostalCodeLong : input.PostalCodeLong || '',
      ReceiverPostalCodeShort : input.PostalCodeShort || '',
      ReceiverStateLong : input.StateLong || '',
      ReceiverStateShort : input.StateShort || '',
      ReceiverAddressLine1 : input.AddressLine1 || '',
      ReceiverAddressLine2 : input.AddressLine2 || '',
    };
  }

  const setSenderData = (input) => {
    return {
      SenderFullName : input.FullName || '',
      SenderEmailID : input.Email || '',
      SenderMobile : input.ContactNumber || '',
      SenderCountryLong : input.CountryLong || '',
      SenderCountryShort : input.CountryShort || '',
      SenderCityLong : input.CityLong || '',
      SenderCityShort : input.CityShort || '',
      SenderPostalCodeLong : input.PostalCodeLong || '',
      SenderPostalCodeShort : input.PostalCodeShort || '',
      SenderStateLong : input.StateLong || '',
      SenderStateShort : input.StateShort || '',
      SenderAddressLine1 : input.AddressLine1 || '',
      SenderAddressLine2 : input.AddressLine2 || '',
    }
  }

  return {
    OrderId: orderDetails.OrderId,
    IsAnon: orderDetails.KeepMeAnonymous,
    CreatedBy : orderDetails.CustomerId,
    ...setSenderData(senderAddressForm),
    ...setReceiverData(recipeintAddressForm),
  }
}