import { loaderActionTypes } from '@Actions/loaderActions';

/**
 * ShopReducers
 *
 * @param {object} state holds store data
 * @param {object} action holds action data
 * @return {object} state
 */
const LoaderReducers = (state = {}, action) => {
  switch (action.type) {
    case loaderActionTypes.SHOW_LOADER: {
      let { loaderCount = 0 } = state;
      return {
        ...state,
        loaderCount: ++loaderCount,
      };
    }
    case loaderActionTypes.HIDE_LOADER: {
      let { loaderCount = 0 } = state;
      return {
        ...state,
        loaderCount: --loaderCount,
      };
    }
    default: {
      return state;
    }
  }
};

export default LoaderReducers;
