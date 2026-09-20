import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import Footer from './Footer.jsx';

export default function App() {
  return (
    <HashRouter>
      <div style={{display:"flex", flexDirection:"column", minHeight:"100vh",}}> 
        <Navbar />
        <main style={{flex:1}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
