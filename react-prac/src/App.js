import { BrowserRouter, Route, Routes } from "react-router-dom";
import App1Movie from "./components/MovieDemo";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import Radio from "./components/Radio";

import "./index.css";
import Redux from "./components/7_Redux";
import Recoil from "./components/Recoil";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/movie" element={<App1Movie />} />
          <Route path="/login" element={<Login />} />
          <Route path="/radio" element={<Radio />} />
          <Route path="/redux" element={<Redux />} />
          <Route path="/recoil" element={<Recoil />} />

          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
