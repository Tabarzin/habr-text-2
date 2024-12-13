import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../utils/actions";

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
      {/* <h1>Reviews</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul> */}
      hello
    </div>
  );
};

export default MainPage;
