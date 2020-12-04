import Constants from '@Utils/constants';
import Helpers from '@Utils/helpers';
import axios from 'axios';

class AccountServices {
  /**
   * updateAccount
   *
   * @param {object} payload
   * @memberof AccountServices
   */
  updateAccount = (payload) => {
    var config = {
      method: 'post',
      url: Constants.UPDATE_USER_ACCOUNT_INFO,
      headers: Helpers.getDefaultHeaders(),
      data: payload,
    };
    const isUpdated = axios(config)
      .then(function(response) {
        const { status } = response;
        if (status >= 200 && status < 300) {
          return true;
        }
      })
      .catch(function(error) {
        throw error;
      });
    return isUpdated;
  };

  /**
   * fetchUserAddresses
   *
   * @memberof AccountServices
   */
  fetchUserAddresses = (UserId) => {
    var config = {
      method: 'get',
      url: Constants.GET_ADDRESS_BY_CUSTOMER.replace(/CUSTID$/, UserId),
      headers: Helpers.getDefaultHeaders(),
    };
    const addresses = axios(config)
      .then(function(response) {
        return response.data;
      })
      .catch(function(error) {
        throw error;
      });
    return addresses;
  };

  /**
   * AddOrUpdateAAddress
   *
   * @param {object} payload
   */
  AddOrUpdateAAddress = (payload) => {
    var axios = require('axios');
    var config = {
      method: 'post',
      url: Constants.ADD_OR_UPDATE_ADDRESS,
      headers: Helpers.getDefaultHeaders(),
      data: payload,
    };

    const address = axios(config)
      .then(function(response) {
        return response.data;
      })
      .catch(function(error) {
        throw error;
      });
    return address;
  };
}

export default new AccountServices();
