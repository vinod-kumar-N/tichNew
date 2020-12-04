class Helpers {
  /**
   * getAuthKey
   *
   * @memberof Helpers
   */
  getAuthKey = () => {
    const tokenCred = JSON.parse(localStorage.getItem('TOKEN_CRED'));
    const { tokenObj: { access_token = '', token_type = '' } = {} } =
      tokenCred || {};
    return `${token_type} ${access_token}`;
  };

  /**
   * getDefaultHearders
   *
   * @memberof Helpers
   */
  getDefaultHeaders = () => {
    return {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'AuthProvider': 'EXTERNAL',
      'Authorization': this.getAuthKey(),
    };
  };
}
export default new Helpers();
