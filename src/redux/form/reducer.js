import {
    SET_POPUP_TRUE,
    SET_POPUP_FALSE,
    SET_VALUE
} from './actions';

const initialState = {
    showPopup: false,
    value: 'ex) 서울 강남구 논현동 99-99',
};

const form = (state = initialState, action) => {
    switch (action.type) {
        case SET_POPUP_TRUE:
        case SET_POPUP_FALSE:
            return { 
                ...state,
                ...action.data,
             };
        case SET_VALUE:
             console.log(action)
             return {
                 ...state,
                 ...action.value,
             }
        default:
            return state;
    }
};

export default form;