import { takeEvery, put } from "redux-saga/effects";
import { FETCH_DATA, fetchDataSuccess, fetchDataFailure } from "./actions";
import data from "../data/reviews";

function* fetchDataSaga() {
  try {
    yield put(fetchDataSuccess(data));
  } catch (error) {
    yield put(fetchDataFailure(error.message));
  }
}

export default function* rootSaga() {
  yield takeEvery(FETCH_DATA, fetchDataSaga);
}
