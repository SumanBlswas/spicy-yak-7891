import {
  legacy_createStore,
  compose,
  combineReducers,
  applyMiddleware,
} from "redux";

// import { useSelector, useDispatch } from "react-redux";

import thunk from "redux-thunk";
import { mensProductReducer } from "./Product/Product.reducer";

const root = combineReducers({
   mens: mensProductReducer,
});

const store = legacy_createStore(root, compose(applyMiddleware(thunk)));

export { store };
