export const accountActionTypes = {
  UPDATE_USER_ACCOUNT: 'update user account',
  GET_USER_ADDRESSES: 'get user addresses',
  SET_USER_ADDRESSES: 'set user addresses',
  ADD_UPDATE_ADDRESS: 'add update address',
};

class AccountActions {
  /**
   * updateUserAccount
   *
   * @memberof AccountActions
   */
  updateUserAccount = (payload) => {
    return {
      type: accountActionTypes.UPDATE_USER_ACCOUNT,
      data: payload,
    };
  };

  /**
   * getUserAddresses
   *
   * @memberof AccountActions
   */
  getUserAddresses = (userId) => {
    return {
      type: accountActionTypes.GET_USER_ADDRESSES,
      userId,
    };
  };

  /**
   * setUserAddresses
   *
   * @memberof AccountActions
   */
  setUserAddresses = (data) => {
    return {
      type: accountActionTypes.SET_USER_ADDRESSES,
      data,
    };
  };

  /**
   * addUpdateAddress
   *
   * @memberof AccountActions
   */
  addUpdateAddress = (payload) => {
    return {
      type: accountActionTypes.ADD_UPDATE_ADDRESS,
      payload,
    };
  };
}

export default new AccountActions();
