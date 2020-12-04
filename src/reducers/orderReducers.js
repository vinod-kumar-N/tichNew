import { orderActionTypes } from "@Actions/orderActions";

const OrderReducers = (state = {}, action) => {
  switch (action.type) {
    case orderActionTypes.PLACE_ORDER:
      return { ...state };
    case orderActionTypes.SET_STEP2:
    case orderActionTypes.SET_STEP2_TO_STORE:
      debugger;
      const { addressDetails, senderAddressForm, recipeintAddressForm, orderDetails } = action;
      return { ...state, addressDetails, senderAddressForm, recipeintAddressForm, orderDetails }
    default:
      return state;
  }
};

export default OrderReducers;
