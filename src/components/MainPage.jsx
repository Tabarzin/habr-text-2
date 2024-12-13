import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../utils/actions";
import "./MainPage.css";

const MainPage = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state);

  console.log(data, "DATATA");

  data.map((item, i) => {
    console.log(item.platform);
  });

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Reviews</h1>
      <div className="grid-container">
        {data.map((item, index) => (
          <div className="grid-item" key={index}>
            <div>
              <strong>Platform:</strong> {item.platform}
            </div>
            <div>
              <strong>Rating:</strong> {item.rating}
            </div>
            <div>
              <strong>Date:</strong> {item.date}
            </div>
            <div>
              <strong>Text:</strong> {item.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
