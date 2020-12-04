import { authActionTypes } from '@Actions/authActions';
const AuthReducer = (state = {}, action) => {
  switch (action.type) {
    case authActionTypes.SET_LOGGED_IN_USER:
      console.log(action.data);
      const { data: userInfo } = action;
      return {
        ...state,
        userInfo,
        isAuthenticated: true,
      };
    case authActionTypes.LOGOUT_USER:
      return {
        ...state,
        userInfo: undefined,
        isAuthenticated: false,
      };
    case authActionTypes.REGISTER_USER:
      console.log("inside authReducer");
      console.log(action);
      debugger;
      const { data: newUserInfo } = action;
      return {
        ...state,
        newUserInfo,
        isAuthenticated: true,
      };
    default:
      return state;
  }
};
export default AuthReducer;
