import { AdminUserActionTypes } from './admin.user.types';

export const setCurrentUser = adminUser => ({
  type: AdminUserActionTypes.SET_CURRENT_ADMIN_USER,
  payload: adminUser
});

export const checkAdminCredentials = adminCredentials => ({
  type: AdminUserActionTypes.ADMIN_SIGN_IN_START,
  payload: (adminCredentials.email, adminCredentials.password)
})
