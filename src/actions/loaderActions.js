export const loaderActionTypes = {
  SHOW_LOADER: 'show loader',
  HIDE_LOADER: 'hide loader',
};

/**
 * LoaderActions class
 *
 */
class LoaderActions {
  /**
   * showLoader
   *
   */
  showLoader() {
    return {
      type: loaderActionTypes.SHOW_LOADER,
    };
  }

  /**
   * hideLoader
   *
   */
  hideLoader() {
    return {
      type: loaderActionTypes.HIDE_LOADER,
    };
  }
}

export default new LoaderActions();
