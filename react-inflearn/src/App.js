import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import FloatingButton from "./components/FloatingButton";

import Home from "./pages/home/Home";
import Lecture from "./pages/lecture/Lecture";
import Roadmap from "./pages/roadmap/Roadmap";
import Community from "./pages/community/Community";
import Mentoring from "./pages/mentoring/Mentoring";
import Inflearn from "./pages/inflearn/Inflearn";

import LectureDetail from "./components/Lecture";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />

      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/lectures" element={<Lecture />} />
        <Route path="/roadmaps" element={<Roadmap />} />
        <Route path="/mentorings" element={<Mentoring />} />
        <Route path="/communities" element={<Community />} />
        <Route path="/inflearns" element={<Inflearn />} />

        <Route path="/lecture" element={<LectureDetail />} />
      </Routes>

      <Footer />
      <FloatingButton />
    </BrowserRouter>
  );
}

export default App;
