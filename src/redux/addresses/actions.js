export const NAME = "ADDRESS";

export const LOAD_ADDRESSES = `${NAME}/LOAD_ADDRESSES`;
export const LOAD_ADDRESSES_REQUEST = `${NAME}/LOAD_ADDRESSES_REQUEST`;
export const LOAD_ADDRESSES_SUCCESS = `${NAME}/LOAD_ADDRESSES_SUCCESS`;
export const LOAD_ADDRESSES_FAILURE = `${NAME}/LOAD_ADDRESSES_FAILURE`;

export function loadAddresses(query) {
  return {
    type: LOAD_ADDRESSES,
    query,
  };
}

export function loadAddressesRequest(query) {
  return {
    type: LOAD_ADDRESSES_REQUEST,
    query,
  };
}

export function loadAddressesSuccess(addresses) {
    return {
        type: LOAD_ADDRESSES_SUCCESS,
        addresses,
    }
}

export function loadAddressesFailure() {
    return {
        type: LOAD_ADDRESSES_FAILURE,
    };
}