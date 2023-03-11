import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router";
import LanguageSelector from "../languageSelector";
import DialogComponent from "../dialog";
import Menu from "../menu";
import NavbarAccordion from "./navbarAccordion";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className="navbar_wrapper">
      <div className="navbar">
        <img
          className="logo"
          onClick={() => navigate("/")}
          src={logo}
          alt="logo"
        />
        <div className="nav_container">
          <div className="ul_container">
            <div className="home_btn">
              <span className="dropdown_span" onClick={() => navigate("/")}>
                {t("Home")}
              </span>
            </div>
            <div className="dropdown_component">
              <span
                className="dropdown_span"
                onClick={() => navigate("/products")}
              >
                {t("Products")}
              </span>

              <div className="dropdown_products">
                <div
                  onClick={() => navigate("/products/1p")}
                  className="dropdown_element"
                >
                  <span>Aluminium Profiles</span>
                </div>

                <div
                  onClick={() => navigate("/products/2p")}
                  className="dropdown_element"
                >
                  <span>Metal-Plastic UPVC</span>
                </div>

                <div
                  onClick={() => navigate("/products/3p")}
                  className="dropdown_element"
                >
                  <span>Glass Constructions</span>
                </div>

                <div
                  onClick={() => navigate("/products/3p")}
                  className="dropdown_element"
                >
                  <span>Remote Controlled Blinds</span>
                </div>

                <div
                  onClick={() => navigate("/products/3p")}
                  className="dropdown_element"
                >
                  <span>Automatic Sliding Door</span>
                </div>

                <div
                  onClick={() => navigate("/products/3p")}
                  className="dropdown_element"
                >
                  <span>Shower Enclosures</span>
                </div>

                <div
                  onClick={() => navigate("/products/3p")}
                  className="dropdown_element"
                >
                  <span>Facade Constructions</span>
                </div>
              </div>
            </div>
            <div className="dropdown_component">
              <span
                className="dropdown_span"
                onClick={() => navigate("/service")}
              >
                {t("Service")}
              </span>


              <div className="dropdown">

                <div
                  onClick={() => navigate("/service/1s")}
                  className="dropdown_element"
                >
                  <span> Free Measurement </span>
                </div>

                <div
                  onClick={() => navigate("/service/2s")}
                  className="dropdown_element"
                >
                  <span> Free Consultation </span>
                </div>

                <div
                  onClick={() => navigate("/service/3s")}
                  className="dropdown_element"
                >
                  <span> Free Installation</span>
                </div>

                <div
                    onClick={() => navigate("/service/3s")}
                    className="dropdown_element"
                >
                  <span> 1 Year Warranty Service</span>
                </div>



              </div>
            </div>

            <div className='dropdown_component'>

              <span
                  className="dropdown_span"
                  onClick={() => navigate("/about-us")}
              >
                {t("About Us")}
              </span>


              <div className='dropdown_about'>
                <div
                    onClick={() => navigate("/service/3s")}
                    className="dropdown_element"
                >
                  <span> Portfolio </span>
                </div>
                <div
                    onClick={() => navigate("/service/3s")}
                    className="dropdown_element"
                >
                  <span> Our History</span>
                </div>
              </div>
            </div>




          </div>
          <Menu />
        </div>
      </div>

      <div className="change_language_wrapper">
        <div className="change_language">
          <div className="contact">
            <div className="contact_container">
              <NavbarAccordion />
              <DialogComponent />
            </div>
            <LanguageSelector />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
