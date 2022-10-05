import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./styles/reset.css";
import "./styles/index.css";
import "./styles/modal.css";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
  // <React.StrictMode>
  // </React.StrictMode>
);
