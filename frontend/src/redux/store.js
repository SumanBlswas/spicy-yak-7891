import {
  legacy_createStore,
  compose,
  combineReducers,
  applyMiddleware,
} from "redux";

import { reducer as adminReducer} from "./Admin/reducer";
// import { useSelector, useDispatch } from "react-redux";

import thunk from "redux-thunk";

const root = combineReducers({adminReducer});

const store = legacy_createStore(root, compose(applyMiddleware(thunk)));

export { store };
