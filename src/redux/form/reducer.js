import {
    SET_POPUP_TRUE,
    SET_POPUP_FALSE
} from './actions';

const initialState = {
    showPopup: false,
};

const form = (state = initialState, action) => {
    switch (action.type) {
        case SET_POPUP_TRUE:
        case SET_POPUP_FALSE:
            return { 
                ...state,
                ...action.data,
             };
        default:
            return state;
    }
};

export default form;