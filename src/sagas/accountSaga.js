import { all, takeLatest, put } from 'redux-saga/effects';
import UserActions from '@Actions/authActions';
import AccountActions, { accountActionTypes } from '@Actions/accountActions';
import AccountServices from '@Services/accountServices';

import { withLoader } from './loaderSaga';

/**
 * _updateAccountDetails makes api calls
 *
 * @param {object} action
 */
function* _updateAccountDetails(action) {
  try {
    const { data: payload } = action;
    const isUpdated = yield AccountServices.updateAccount(payload);
    if (isUpdated) {
      yield put(UserActions.loginUsingAuthToken());
    }
  } catch (error) {
    yield console.log('Could not update user info!', error);
  }
}

/**
 * calls _updateAccountDetails
 *
 */
function* updateAccountDetails() {
  yield takeLatest(
    accountActionTypes.UPDATE_USER_ACCOUNT,
    withLoader(_updateAccountDetails),
  );
}

/**
 * _getUserAddresses
 *
 */
function* _getUserAddresses(action) {
  try {
    const { userId } = action;
    const addresses = yield AccountServices.fetchUserAddresses(userId);
    yield put(AccountActions.setUserAddresses(addresses));
  } catch (error) {
    yield console.log("Couln't load addresses", error);
  }
}

/**
 * getUserAddresses
 *
 */
function* getUserAddresses() {
  yield takeLatest(
    accountActionTypes.GET_USER_ADDRESSES,
    withLoader(_getUserAddresses),
  );
}

/**
 * _addUpdateAddress
 *
 * @param {object} action
 */
function* _addUpdateAddress(action) {
  try {
    const { payload } = action;
    const address = yield AccountServices.AddOrUpdateAAddress(payload);
    console.log('address ----->>>>', address);
    yield put(AccountActions.getUserAddresses(address.CustomerId));
  } catch (error) {
    yield console.log("Couln't add/update addresses", error);
  }
}

function* addUpdateAddress() {
  yield takeLatest(
    accountActionTypes.ADD_UPDATE_ADDRESS,
    withLoader(_addUpdateAddress),
  );
}

export default function* AccountSaga() {
  yield all([updateAccountDetails(), getUserAddresses(), addUpdateAddress()]);
}
