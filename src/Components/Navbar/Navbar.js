import React, { useEffect } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import $ from "jquery";
import imgnavbar from "./navbar.png";

const Navbar = () => {
  function animation() {
    var tabsNewAnim = $("#navbarSupportedContent");
    var activeItemNewAnim = tabsNewAnim.find(".active");
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".selector").css({
      top: itemPosNewAnimTop.top + "px",
      left: itemPosNewAnimLeft.left + "px",
      height: activeWidthNewAnimHeight + "px",
      width: activeWidthNewAnimWidth + "px",
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
      $("#navbarSupportedContent ul li").removeClass("active");
      $(this).addClass("active");
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".selector").css({
        top: itemPosNewAnimTop.top + "px",
        left: itemPosNewAnimLeft.left + "px",
        height: activeWidthNewAnimHeight + "px",
        width: activeWidthNewAnimWidth + "px",
      });
    });
  }

  useEffect(() => {
    animation();
    $(window).on("resize", function () {
      setTimeout(function () {
        animation();
      }, 500);
    });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <NavLink className="navbar-brand navbar-logo" to="/" exact>
        <img src={imgnavbar} width="90px" height="32px" alt="Navbar" />
      </NavLink>

      <button
        className="navbar-toggler"
        onClick={function () {
          setTimeout(function () {
            animation();
          });
        }}
        type="button"
      >
        <i className="fas fa-bars text-white"></i>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto"> {/* Gunakan ml-auto untuk menu di kanan */}
          <li className="nav-item active">
            <NavLink className="nav-link" to="/" exact>
              <i className="fas fa-home"></i>Beranda
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/Cari" exact>
              <i className="fa fa-search"></i>Cari Lowongan Kerja
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/Auth" exact>
              <i className="fa fa-arrow-right"></i>Masuk
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;