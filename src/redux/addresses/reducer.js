import {
  LOAD_ADDRESSES_REQUEST,
  LOAD_ADDRESSES_SUCCESS,
  LOAD_ADDRESSES_FAILURE
} from "./actions";

const initialState = {
  loading: false,
  data: [],
  // values: "주소를 입력하세요"
};

const addresses = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ADDRESSES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case LOAD_ADDRESSES_SUCCESS:
      return {
        ...state,
        data: [...action.addresses],
        error: null
      };
    case LOAD_ADDRESSES_FAILURE:
      return {
        ...state,
        data: [],
        error: action.err
      };
    default:
      return state;
  }
};

export default addresses;
