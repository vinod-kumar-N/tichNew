import LoaderActions from '@Actions/loaderActions';
import { call, put } from 'redux-saga/effects';

/**
 * withLoader
 */
export const withLoader = (saga) => function* (action) {
  try {
    yield put(LoaderActions.showLoader());
    yield call(saga, action);
  }
  catch {
    yield put(LoaderActions.hideLoader());
  }
  finally {
    yield put(LoaderActions.hideLoader());
  }
}
