import { combineReducers, legacy_createStore as createStore } from "redux";
import cartSlice from "../reducers/cartSlice";
  
  const rootReducer = combineReducers({
    cart: cartSlice,
  });
  
  const store = createStore(
    rootReducer,
  );
  
export default store; 