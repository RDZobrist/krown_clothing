import { take } from 'redux-saga/effects';
import { all, call, takeLatest, put } from 'redux-saga/effects';

import UserActionTypes from '../user/user.types';
import { clearCart } from './cart.actions';


export function* clearCartOnSignout() {
    yield put(clearCart());
};

export function* onSignoutSuccess(){
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignout)
};

export function* cartSagas() {
    yield(all([
        call(onSignoutSuccess)
    ])
)};
