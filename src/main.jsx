import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import Reducer from "./store/Reducer.js";
const store = legacy_createStore(Reducer);
import ScroolToTop from "./components/ScroolToTop";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router>
      <ScroolToTop />
      <App />
    </Router>
  </Provider>
);
