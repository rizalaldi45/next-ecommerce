import { takeLatest, put } from 'redux-saga/effects';

import {AUTH_ACTION} from '../action/index'

function* userLogin() {
    try {
        yield put({ type: AUTH_ACTION.USER_LOGIN_SUCCESS, payload: 'budi' })
    } catch {
        yield put({ type: AUTH_ACTION.USER_LOGIN_FAIL })
    }
}

function* authSaga() {
    yield takeLatest(AUTH_ACTION.USER_LOGIN, userLogin)
}

export default authSaga;

