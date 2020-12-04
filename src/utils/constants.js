const protocol = 'http://';
const secureProtocol = 'https://';
const defaultDomain = `${protocol}testapi.tihlc.com/v2/api/`;
// const defaultDomain = `${protocol}localhost:81/v2/api/`;

// http://testapi.tihlc.com/v2/api/Customer/GetByEmailId
const Constants = {
  GET_LOGIN_TOKEN: `${defaultDomain}token`,
  LOGIN_USER: `${defaultDomain}Login/UserInfo`,
  GET_USER_BY_EMAIL: `${defaultDomain}Customer/GetByEmailId`,
  GET_COUNTRY_DROPDOWN: `${defaultDomain}Geo/CountryDetails`,
  GET_GEO_CODE_LOOKUP: `${defaultDomain}Geo/GoogleGeoCodeLookUp`,
  UPDATE_USER_ACCOUNT_INFO: `${defaultDomain}Customer/Update`,
  GET_ADDRESS_BY_CUSTOMER: `${defaultDomain}Customer/GetAddressByCustomer?customerId=CUSTID`,
  ADD_OR_UPDATE_ADDRESS: `${defaultDomain}Customer/AddOrUpdateAddress`,
  LETTER_STEP1: `${defaultDomain}Letters/Step1`,
  LETTER_STEP2: `${defaultDomain}Letters/Step2`,
  CREATE_USER: `${defaultDomain}Customer/Create`,
};

export default Constants;

export const AddressTypes = {
  SENDER: 'SENDER',
  RECEIVER: 'RECEIVER'
}
