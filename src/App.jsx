import "./App.css";
import MainPage from "../src/components/MainPage";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../src/store/store";

const App = () => (
  <Provider store={store}>
    <MainPage />
  </Provider>
);

export default App;
