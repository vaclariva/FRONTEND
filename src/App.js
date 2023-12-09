import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Switch } from "react-router-dom";

// tampilan awal dan menu
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/login/Login"; // Perbaikan path impor
import Reg from "./pages/Auth/reg/Reg";
import Cari from "./pages/Cari/Cari";
import Industri from "./pages/Kategori/Industri";
import Detail from "./pages/Kategori/Detail/Detail";
import SplashScreen from './pages/Splash/SplashScreen';
// navbar dan footer
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Data from "./Data";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Ganti dengan jumlah detik yang diinginkan

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={loading ? <SplashScreen /> : <Home />} />
          <Route path="/cari" element={<Cari />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Reg" element={<Reg />} />
          <Route path="/industri" element={<Industri />} />
          <Route path="/industri/detail" element={<Detail />} />
          <Route path="/data" element={<Data />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
