import { put, takeLatest, yield, call} from 'redux-saga/effects';
import { AdminUserActionTypes } from './admin.user.types';





export function* authenticateAdmin(adminCredentials) {
    const { email, password } = adminCredentials;
    yield alert('email', email, 'pass', password)
}

 export function* onStartCheckAdminCredentials() {
    yield takeLatest(AdminUserActionTypes.ADMIN_SIGN_IN_START, authenticateAdmin)
  };