import {
    SET_POPUP_TRUE,
    SET_POPUP_FALSE
} from './actions';

const initialState = {
    showPopup: false,
    value: '서울 강남구 논현동 9999-9999',
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