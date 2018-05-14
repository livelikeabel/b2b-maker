export const NAME = 'FORM';

export const SET_POPUP_TRUE = `${NAME}/SET_POPUP_TRUE`;
export const SET_POPUP_FALSE = `${NAME}/SET_POPUP_FALSE`;


export function setPopupTrue(data) {
    return {
        type: SET_POPUP_TRUE,
        data
    }
}

export function setPopupFalse(data) {
    return {
        type: SET_POPUP_FALSE,
        data
    }
}