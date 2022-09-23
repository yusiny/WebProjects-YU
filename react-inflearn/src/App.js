import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import FloatingButton from "./components/FloatingButton";
import Lecture from "./components/Lecture";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />

      <Home />
      {/* <Lecture /> */}

      <Footer />
      <FloatingButton />
    </div>
  );
}

export default App;
