import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import dataReducer from "../utils/reducer";
import rootSaga from "../utils/sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: dataReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export { store };
