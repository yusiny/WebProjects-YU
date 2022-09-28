import { BrowserRouter, Route, Routes } from "react-router-dom";
import App1Movie from "./components/MovieDemo";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import Radio from "./components/Radio";

import "./index.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/movie" element={<App1Movie />} />
          <Route path="/login" element={<Login />} />
          <Route path="/radio" element={<Radio />} />

          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
