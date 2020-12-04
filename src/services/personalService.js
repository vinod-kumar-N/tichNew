import axios from 'axios';
import Constants from '@Utils/constants';
import Helpers from '@Utils/helpers';

// const _axios = axios.create({
//     headers: Helpers.getDefaultHeaders()
// })
class PersonalServices {
    countryList = (async () => {
        const response = await axios.get(Constants.GET_COUNTRY_DROPDOWN, {headers: Helpers.getDefaultHeaders()});
        const data = await response.data;
        return data;
    });

    getGeoCodeData = (async (zipcode, country) => {
        const response = await axios.get(Constants.GET_GEO_CODE_LOOKUP, {
            params: { zipcode: zipcode, country: country },
            headers: Helpers.getDefaultHeaders()
        });
        const data = await response.data;
        return data;
    });

    addAddressDetails = (async (payload) => {
        const response = await axios.post(Constants.LETTER_STEP2, payload,{ headers: Helpers.getDefaultHeaders()});
        const data = await response.data;
        return data;
    });

    addPersonalMessage = (async (payload) => {
        const response = await axios.post(Constants.LETTER_STEP1, payload,{ headers: Helpers.getDefaultHeaders()});
        const data = await response.data;
        return data;
    });

}

export default new PersonalServices();