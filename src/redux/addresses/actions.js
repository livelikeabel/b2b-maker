export const NAME = 'ADDRESSES';

export const LOAD_ADDRESS = `${NAME}/LOAD_ADDRESS`;
export const LOAD_ADDRESS_REQUEST = `${NAME}/LOAD_ADDRESS_REQUEST`;
export const LOAD_ADDRESS_SUCCESS = `${NAME}/LOAD_ADDRESS_SUCCESS`;
export const LOAD_ADDRESS_FAILURE = `${NAME}/LOAD_ADDRESS_FAILURE`;

export function loadAddress(query) {
    return {
        type: LOAD_ADDRESS,
        query,
    }
}