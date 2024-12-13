export const FETCH_REVIEWS_REQUEST = "FETCH_REVIEWS_REQUEST";
export const FETCH_REVIEWS_SUCCESS = "FETCH_REVIEWS_SUCCESS";
export const FETCH_REVIEWS_FAILURE = "FETCH_REVIEWS_FAILURE";
export const FILTER_REVIEWS = "FILTER_REVIEWS";
export const SORT_REVIEWS = "SORT_REVIEWS";

export const FETCH_DATA = "FETCH_DATA";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const fetchReviewsRequest = () => ({ type: FETCH_REVIEWS_REQUEST });
export const fetchReviewsSuccess = (data) => ({
  type: FETCH_REVIEWS_SUCCESS,
  data,
});
export const fetchReviewsFailure = (error) => ({
  type: FETCH_REVIEWS_FAILURE,
  error,
});
export const filterReviews = (filterCriteria) => ({
  type: FILTER_REVIEWS,
  filterCriteria,
});
export const sortReviews = (sortCriteria) => ({
  type: SORT_REVIEWS,
  sortCriteria,
});

export const fetchData = () => ({ type: FETCH_DATA });
export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});
export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});
