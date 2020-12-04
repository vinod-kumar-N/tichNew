import { all, takeLatest, put } from 'redux-saga/effects';
import OrderActions, { orderActionTypes } from '@Actions/orderActions';
import { withLoader } from './loaderSaga';
import PersonalService from "@Services/personalService";

function* _placeOrder() {
  // todo
  yield setTimeout(() => {
    console.log('order saga');
  }, 100);
}

function* placeOrder() {
  yield takeLatest(orderActionTypes.PLACE_ORDER, _placeOrder);
}


function* _addStep2Details(action) {
  try {
    const { addressDetails, senderAddressForm, recipeintAddressForm, orderDetails } = action;
    const lettersStep2 = yield PersonalService.addAddressDetails(addressDetails);
    console.log('step2 data', lettersStep2);
    yield put(OrderActions.setStep2DataToStore({ addressDetails, senderAddressForm, recipeintAddressForm, orderDetails }));
  } catch (error) {
    yield console.log("Error while adding Address details to the order", error);
  }
}
function* addStep2Details() {
  yield takeLatest(orderActionTypes.SET_STEP2, withLoader(_addStep2Details));
}

export default function* OrderSaga() {
  yield all([placeOrder(), addStep2Details()]);
}
