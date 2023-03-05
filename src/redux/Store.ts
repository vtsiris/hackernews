import { applyMiddleware, createStore } from "redux";

import createSagaMiddleware from "@redux-saga/core";

import rootReducer from "./RootReducer";
import sagas from "./RootSaga";

import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(sagas);

export default store;
