import { takeLatest, put, all, call } from "redux-saga/effects";
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser

} from "../../firebase/firebase.utils";

import UserActionTypes from "./user.types";
import {
  signinSuccess,
  signinFailure,
  signupFailure,
  signupSuccess,
  signoutSuccess,
  signoutFailure,
} from './user.actions';



export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const userSnapshot = yield userRef.get();
    yield put(signinSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signinFailure(error));
  }
};



export function* signupWithEmailandPwd({ payload: { email, password, displayName } }) {
  console.log('ive been called')
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(
      email,
      password
    );
    yield put(signupSuccess({ user, additionalData: { displayName } }));
  }
  catch (error) {
    yield put(signupFailure(error))
  }
};



export function* signinAfterSignup({ payload: { user, additionalData } }) {
  yield getSnapshotFromUserAuth(user, additionalData);
};



export function* signinWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signinFailure(error));
  }
};

export function* signinWithEmailandPwd({ payload: { email, password, displayName  } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();

    yield put(
     signinSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    )
  }
  catch (error) {
    put(signinFailure(error))
  }
};

export function* isUserAuthenticated() {
  try{
    const userAuth = yield getCurrentUser();
    if(!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  }catch (error){
    yield put(signinFailure(error));
  }
};

export function* signUserOut() {
  try {
    yield auth.signOut();
    yield put(signoutSuccess());
  } catch (error) {
    yield put(signoutFailure(error));
  }
};

// **__**__** SAGA GENERATOR LISTENERS **__**__** \\
export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signinWithGoogle);
}; 
export function* onEmailSigninStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signinWithEmailandPwd)
};
export function* onSignupStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signupWithEmailandPwd);
};
export function* onSignupSuccess() {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signinAfterSignup);
};
export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
};
export function* onStartUserSignout() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signUserOut)
};
export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSigninStart),
    call(onCheckUserSession),
    call(onStartUserSignout),
    call(onSignupStart),
    call(onSignupSuccess)
  ]);
};