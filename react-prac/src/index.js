import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";
import rootReducer from "./reducers";

import "./index.css";
import { RecoilRoot } from "recoil";

const store = createStore(rootReducer);

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
  // <Provider store={store}>
  //   <App />
  // </Provider>

  //<React.StrictMode>
  //</React.StrictMode>
);
