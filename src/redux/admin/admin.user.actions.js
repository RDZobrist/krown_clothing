import { AdminUserActionTypes } from './admin.user.types';

export const setCurrentUser = adminUser => ({
  type: AdminUserActionTypes.SET_CURRENT_ADMIN_USER,
  payload: adminUser
});
