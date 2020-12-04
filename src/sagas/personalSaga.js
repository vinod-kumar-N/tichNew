import { all, put, takeLatest } from 'redux-saga/effects';
import personalActions, { personalActionTypes } from '@Actions/personalActions';
import PersonalService from '../services/personalService';
import { withLoader } from './loaderSaga';

function* _getCountryList(action) {
    try {
        const payload = action;
        const countries = yield PersonalService.countryList();
        yield put(personalActions.setCountryList(countries.countryDetails));
    } catch (error) {
        yield console.log('Error while fetching countries', error);
    }
}

function* getCountryList() {
    yield takeLatest(personalActionTypes.GET_COUNTRY_LIST, withLoader(_getCountryList));
}

function* _setPersonalMessage(action) {
    try {
        const payload = action;
        const personalMessage = yield PersonalService.addAddressDetails(payload);
        yield put(personalActions.setPersonalMessage(personalMessage));
    } catch (error) {
        yield console.log('Error while fetching Pers', error);
    }
}

function* setPersonalMessage(action) {
    yield takeLatest(personalActionTypes.SET_PERSONAL_MESSAGE, withLoader(_getCountryList));
}

export default function* PersonalSaga() {
    yield all([getCountryList(), setPersonalMessage()])
}