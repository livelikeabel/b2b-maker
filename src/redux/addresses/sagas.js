import { takeEvery, put, call } from 'redux-saga/effects';

import { getAddressInfo } from 'src/api';

import {
    LOAD_ADDRESSES,
    loadAddressesRequest,
    loadAddressesSuccess,
    loadAddressesFailure,
} from './actions';

// loadAddresses 제너레이터 함수는 action객체를 받고,
export function* loadAddresses(actions) {
    const { query } = actions;
    yield put(loadAddressesRequest(query));
    try {
        const addresses = yield call(getAddressInfo, {
            query,
        });
    
      yield put(loadAddressesSuccess(addresses));
    } catch(err) {
      yield put(loadAddressesFailure(err));
    }
}

export function* watchAddresses() {
    yield takeEvery(LOAD_ADDRESSES, loadAddresses);
}