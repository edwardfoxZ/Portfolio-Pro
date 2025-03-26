import "./App.css";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Contract } from "./components/Contract";
import { Footer } from "./components/Footer";
function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Portfolio />
      <Contract />
      <Footer />
    </>
  );
}

export default App;
