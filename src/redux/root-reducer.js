import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import shoppingCartReducer from './shoppingCart/shoppingCart.reducer';
export default combineReducers({
    user: userReducer,
    shoppingCart: shoppingCartReducer
})