import { call, put, takeLatest } from "redux-saga/effects";
import {
  FETCH_REVIEWS_REQUEST,
  fetchReviewsSuccess,
  fetchReviewsFailure,
} from "./actions";

import data from "../data/reviews";

function* fetchReviews() {
  try {
    const reviews = data;
    yield put(fetchReviewsSuccess(reviews));
  } catch (error) {
    yield put(fetchReviewsFailure(error.message));
  }
}

export default function* watchFetchReviews() {
  yield takeLatest(FETCH_REVIEWS_REQUEST, fetchReviews);
}
