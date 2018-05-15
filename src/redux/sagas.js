import { all, fork } from 'redux-saga/effects';

import { watchAddresses } from './addresses/sagas';

export default function* root() {
    yield all([
        fork(watchAddresses),
    ]);
};