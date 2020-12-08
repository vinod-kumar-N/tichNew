import { personalActionTypes } from '@Actions/personalActions';
const initialState = {
    countries: [],
    states: [],
    personalMessage: '1234'
};
const PersonalReducer = (state = initialState, action) => {
    switch (action.type) {
        case personalActionTypes.GET_COUNTRY_LIST:
            return {
                ...state
            }
        case personalActionTypes.SET_COUNTRY_LIST:
            const { data: countries } = action;
            return {
                ...state,
                countries
            }
        case personalActionTypes.GET_STATE_LIST:
            const { data: states } = action;
            return {
                ...state,
                states: states
            }
        
        case personalActionTypes.SET_PERSONAL_MESSAGE:
            const { data: personalMessage } = action;
                return {
                    ...state,
                    personalMessage: personalMessage
                }

        default:
            {
                return state;
            }
    }
};

export default PersonalReducer;