export const personalActionTypes = {
    GET_COUNTRY_LIST: 'Get country list',
    SET_COUNTRY_LIST: 'Set country list',
    GET_STATE_LIST: 'Get state list',
    SET_ADDRESS_DETAILS: 'Set Address Details',
    SET_PERSONAL_MESSAGE: 'Set Personal Message'
}

class PersonalActions{
    getCountryList = () => {
        return {
            type: personalActionTypes.GET_COUNTRY_LIST,
        };
    };
    setCountryList = (data) => {
        return {
            type: personalActionTypes.SET_COUNTRY_LIST,
            data
        };
    };
    setPersonalMessage = (data) => {
        return {
            type: personalActionTypes.SET_PERSONAL_MESSAGE,
            data
        };
    };

}

export default new PersonalActions();