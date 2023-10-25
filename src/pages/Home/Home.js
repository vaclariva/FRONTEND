import React from "react";
import "./Home.css";
import "aos/dist/aos";
import icon from "../../assets/img/icon.png";
import logo from "../../assets/img/logo.png";
import { NavLink } from "react-router-dom";
// import Berita from "./ComponentsHome/Berita"

const Home = () => {
  return (
    <div>
      <div className="d-flex justify-content-between p-4 bg-light">
        <img src={icon} alt="icon" style={{ width: "70%" }} />
        <div className="flex-grow-1 p-4 bg-light mx-auto text-center">
          <img src={logo} alt="logo" style={{ width: "100px", height: "100px" }} />
          <h1 className="font-size-24 mb-4">Solusi Tepat Mendapatkan Informasi Lowongan Pekerjaan</h1>
          <p className="font-size-16 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in risus id nunc gravida ultricies. Nullam auctor mauris ut luctus. Fusce semper ligula a metus iaculis, a fermentum dolor luctus.</p>
          <NavLink to="/Auth" className="btn btn-primary btn-lg">
            Bergabung
          </NavLink>
        </div>
      </div>
      {/* <Berita /> */}
    </div>
  );
};
export default Home;
