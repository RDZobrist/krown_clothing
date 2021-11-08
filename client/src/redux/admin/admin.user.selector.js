import { createSelector } from "reselect";


const selectAdminUser = state => state.adminUser;

export const selectCurrentAdminUser = createSelector(
    [selectAdminUser], 
    (adminUser) => adminUser.currentAdminUser 
)