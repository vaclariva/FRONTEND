import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// tampilan awal dan menu
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth"
import Cari from "./pages/Cari/Cari";
import Industri from "./pages/Kategori/Industri"
import Detail from "./pages/Kategori/Detail/Detail"
// navbar dan footer
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cari" element={<Cari />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/industri" element={<Industri />} />
          <Route path="/industri/detail" element={<Detail />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
};

export default App;
