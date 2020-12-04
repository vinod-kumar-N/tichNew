//SET_USER_ADDRESSES
const initialValue = {
  userAddresses : []
}

import { accountActionTypes } from '@Actions/accountActions';
const AccountReducers = (state = initialValue, action) => {
  switch (action.type) {
    case accountActionTypes.SET_USER_ADDRESSES:
      const { data: userAddresses } = action;
      return {
        ...state,
        userAddresses,
      };
    default:
      return state;
  }
};
export default AccountReducers;
