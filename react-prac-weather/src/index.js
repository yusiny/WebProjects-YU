import React from "react";
import ReactDOM from "react-dom/client";
import KakaoDemo from "./KakaoDemo";
import WeatherDemo from "./WeatherDemo";

import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <WeatherDemo /> */}
    <KakaoDemo />
  </React.StrictMode>
);
