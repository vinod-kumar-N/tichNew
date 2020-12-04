export const authActionTypes = {
  'GET_AUTH_TOKEN': 'get auth token',
  'SET_AUTH_TOKEN': 'set auth token',
  'LOGIN_USING_AUTH_TOKEN': 'login using auth token',
  'SET_LOGGED_IN_USER': 'set logged in user',
  'LOGOUT_USER': 'logout user',
  'REGISTER_USER': 'register user'
};

class UserActions {
  getAuthToken = (payload) => {
    return {
      type: authActionTypes.GET_AUTH_TOKEN,
      data: payload,
    };
  };
  setAuthTokenToLocalStorage = (tokenPayload) => {
    localStorage.setItem('TOKEN_CRED', JSON.stringify(tokenPayload));
    return {
      type: authActionTypes.SET_AUTH_TOKEN,
    };
  };
  loginUsingAuthToken = (token) => {
    return {
      type: authActionTypes.LOGIN_USING_AUTH_TOKEN,
      token,
    };
  };
  setLoggedInUser = (data) => {
    return {
      type: authActionTypes.SET_LOGGED_IN_USER,
      data,
    };
  };
  logoutUser = () => {
    localStorage.removeItem('TOKEN_CRED');
    return {
      type: authActionTypes.LOGOUT_USER,
    };
  };
  registerUser = (payload) => {
    return {
      type: authActionTypes.REGISTER_USER,
      data: payload,
    };
  };

}

export default new UserActions();
