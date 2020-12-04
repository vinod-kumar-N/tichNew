import { combineReducers } from 'redux';
import OrderReducers from './orderReducers';
import AuthReducers from './authReducers';
import LoaderReducers from './loaderReducers';
import PersonalReducers from './personalReducers';
import AccountReducers from './accountReducers';

const AppReducers = combineReducers({
  OrderReducers,
  AuthReducers,
  LoaderReducers,
  PersonalReducers,
  AccountReducers,
});

const RootReducer = (existingState, action) =>
  AppReducers(existingState, action);

export default RootReducer;
