import {
  legacy_createStore,
  compose,
  combineReducers,
  applyMiddleware,
} from "redux";

// import { useSelector, useDispatch } from "react-redux";

import thunk from "redux-thunk";

const root = combineReducers({});

const store = legacy_createStore(root, compose(applyMiddleware(thunk)));

export { store };
