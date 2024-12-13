import "./MainPage.css";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchReviewsRequest,
  filterReviews,
  sortReviews,
} from "../utils/actions";

const MainPage = () => {
  const dispatch = useDispatch();
  const { filteredReviews, loading, error } = useSelector((state) => state);

  const [filterCriteria, setFilterCriteria] = useState({
    platform: "",
    ratingMin: 1,
    ratingMax: 5,
  });

  const [sortCriteria, setSortCriteria] = useState({
    by: "date",
    order: "desc",
  });

  useEffect(() => {
    dispatch(fetchReviewsRequest());
  }, [dispatch]);

  const handleFilterChange = (e) => {
    const updatedCriteria = {
      ...filterCriteria,
      [e.target.name]: e.target.value,
    };
    setFilterCriteria(updatedCriteria);
    dispatch(filterReviews(updatedCriteria));
  };

  const handleSortChange = (by) => {
    const newOrder = sortCriteria.order === "asc" ? "desc" : "asc";
    setSortCriteria({ by, order: newOrder });
    dispatch(sortReviews({ by, order: newOrder }));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Reviews</h1>

      <div>
        <label>
          Platform:
          <select
            name="platform"
            value={filterCriteria.platform}
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            <option value="Google">Google</option>
            <option value="Яндекс">Яндекс</option>
            <option value="2ГИС">2ГИС</option>
          </select>
        </label>
        <label>
          Rating:
          <input
            type="number"
            name="ratingMin"
            value={filterCriteria.ratingMin}
            onChange={handleFilterChange}
          />{" "}
          to{" "}
          <input
            type="number"
            name="ratingMax"
            value={filterCriteria.ratingMax}
            onChange={handleFilterChange}
          />
        </label>
      </div>

      <div>
        <button onClick={() => handleSortChange("date")}>Sort by Date</button>
        <button onClick={() => handleSortChange("rating")}>
          Sort by Rating
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Platform</th>
            <th>Rating</th>
            <th>Date</th>
            <th>Text</th>
          </tr>
        </thead>
        <tbody>
          {filteredReviews.map((item, index) => (
            <tr key={index}>
              <td>{item.platform}</td>
              <td>{item.rating}</td>
              <td>{item.date}</td>
              <td>{item.text}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MainPage;
