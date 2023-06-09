import {
  legacy_createStore,
  compose,
  combineReducers,
  applyMiddleware,
} from "redux";

import { reducer as adminReducer } from "./Admin/reducer";
import { reducer as CartReducer } from "./CartRedux/cart.reducer";
import thunk from "redux-thunk";
import { mensProductReducer } from "./Product/Product.reducer";
const root = combineReducers({
  mens: mensProductReducer,
  CartReducer,
  adminReducer,
});
const store = legacy_createStore(root, compose(applyMiddleware(thunk)));
export { store };
