import { FETCH_REVIEWS_SUCCESS, FILTER_REVIEWS, SORT_REVIEWS } from "./actions";

const initialState = {
  reviews: [],
  filteredReviews: [],
  loading: false,
  error: null,
};

const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REVIEWS_SUCCESS:
      return {
        ...state,
        reviews: action.data,
        filteredReviews: action.data,
        loading: false,
      };
    case FILTER_REVIEWS: {
      const { platform, ratingMin, ratingMax } = action.filterCriteria;
      const filtered = state.reviews.filter((review) => {
        const matchesPlatform = platform ? review.platform === platform : true;
        const matchesRating =
          review.rating >= ratingMin && review.rating <= ratingMax;
        return matchesPlatform && matchesRating;
      });
      return {
        ...state,
        filteredReviews: filtered,
      };
    }
    case SORT_REVIEWS: {
      const { by, order } = action.sortCriteria;
      const sorted = [...state.filteredReviews].sort((a, b) => {
        if (by === "date") {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return order === "asc" ? dateA - dateB : dateB - dateA;
        }
        if (by === "rating") {
          return order === "asc" ? a.rating - b.rating : b.rating - a.rating;
        }
        return 0;
      });
      return {
        ...state,
        filteredReviews: sorted,
      };
    }
    default:
      return state;
  }
};

export default reviewsReducer;
