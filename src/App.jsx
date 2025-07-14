import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import ServicesPage from "./pages/ServicesPage";
import Contactpage from "./pages/contactpage";

function App() {
  return (
    <BrowserRouter>
      <div className="fixed top-0 left-0 right-0 z-50"> 
        <Navbar />
      </div>

      <main>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio/*" element={<PortfolioPage />} />
            <Route path="/services/*" element={<ServicesPage />} />
            <Route path="/contact" element={<Contactpage />} />
          </Routes>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 z-50"> 
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;