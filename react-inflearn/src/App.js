import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/home/Home";
import FloatingButton from "./components/FloatingButton";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />

      <Home />

      <Footer />
      <FloatingButton />
    </div>
  );
}

export default App;
