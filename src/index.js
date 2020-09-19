import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./Redux/reducer";
import App from "./App";

const store = createStore(reducer);
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
