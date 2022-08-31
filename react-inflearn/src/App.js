import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />

      <Home />

      <Footer />
    </div>
  );
}

export default App;
