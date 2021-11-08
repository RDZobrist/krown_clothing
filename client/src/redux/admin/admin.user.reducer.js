import { AdminUserActionTypes } from './admin.user.types';

const INITIAL_STATE = {
  currentAdminUser: null
};

const adminUserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AdminUserActionTypes.SET_CURRENT_ADMIN_USER:
      return {
        ...state,
        currentAdminUser: action.payload
      };
    default:
      return state;
  }
};

export default adminUserReducer;
