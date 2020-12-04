import { all, takeLatest, put } from 'redux-saga/effects';
import UserActions, { authActionTypes,  } from '@Actions/authActions';
import AuthServices from '@Services/authServices';
import { withLoader } from './loaderSaga';

function* _getAuthToken(action) {
  try {
    const payload = action.data;
    const { username: Email } = payload;
    yield put(UserActions.logoutUser());
    const tokenObj = yield AuthServices.getAuthTokan(payload);
    const tokenPayload = { Email, tokenObj };
    yield put(UserActions.setAuthTokenToLocalStorage(tokenPayload));
    yield put(UserActions.loginUsingAuthToken());
  } catch (error) {
    yield console.log('Could not fetch token!', error);
  }
}

function* _registerUser(action) {
  try {
    const payload = action.data;
    console.log("Action Data: ", payload);
    const { name: FirstName, email: Email, number: Mobile, password: Password, lastname: LastName } = payload;
    const APIRequestObj = { FirstName, Email, Mobile, Password, LastName }
    const userInfo = yield (AuthServices.registerUser(APIRequestObj));
    yield put(UserActions.registerUser(userInfo));
    console.log("Success: ", userInfo);
    const { email: username } = payload

    const tokenObj = yield AuthServices.getAuthTokan({ username, Password });
    const { Email: email } = payload
    const tokenPayload = { Email, tokenObj };
    yield put(UserActions.setAuthTokenToLocalStorage(tokenPayload));

    const userObj = yield AuthServices.loginUsingToken(tokenPayload);
    yield put(UserActions.setLoggedInUser(userObj));
  } catch (error) {
    yield console.log('Could not register user!', error);
  }
}

function* getAuthToken() {
  yield takeLatest(authActionTypes.GET_AUTH_TOKEN, withLoader(_getAuthToken));
}

function* _loginUsingToken() {
  const tokenCred = JSON.parse(localStorage.getItem('TOKEN_CRED'));
  try {
    const userObj = yield AuthServices.loginUsingToken(tokenCred);
    console.log(userObj);
    yield put(UserActions.setLoggedInUser(userObj));
  } catch (error) {
    console.log('could not login!', error);
  }
}

function* loginUsingToken() {
  yield takeLatest(
    authActionTypes.LOGIN_USING_AUTH_TOKEN,
    withLoader(_loginUsingToken),
  );
}

function* registerUser() {
  yield takeLatest(
    authActionTypes.REGISTER_USER,
    withLoader(_registerUser),
  );
}

export default function* AuthSaga() {
  yield all([getAuthToken(), loginUsingToken(), registerUser()]);
}
