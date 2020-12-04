import { all } from 'redux-saga/effects';
import OrderSaga from './orderSaga';
import AuthSaga from './authSaga';
import AccountSaga from './accountSaga';
import PersonalSaga from './personalSaga';

export default function* rootSaga() {
  yield all([OrderSaga(), AuthSaga(), PersonalSaga(), AccountSaga() ]);
}
