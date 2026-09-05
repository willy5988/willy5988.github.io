import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import Certs from "./Certs";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/certs" element={<Certs />} />
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;
