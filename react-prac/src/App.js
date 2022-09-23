import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movie from "./components/Movie";
import App1Movie from "./App1Movie";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Header from "./components/Header";

import "./index.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/movie" element={<App1Movie />} />
          <Route path="/login" element={<Login />} />

          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
