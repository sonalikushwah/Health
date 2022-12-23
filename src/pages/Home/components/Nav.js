import React, { useEffect } from "react";
import { useState } from "react";
import Login from "../components/Login-Singup";
const Nav = () => {
  const [isopen, setIsopen] = useState(false);
  const [navClass, setNavClass] = useState();

  function stickNavbar() {
    let windowHeight = window.scrollY;
    windowHeight > 500 ? setNavClass("scrolled awake") : setNavClass("");
  }
  const togglePopup = (state) => {
    setIsopen(state);
  };

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
  }, []);
  return (
    <>
      <div className="py-1 bg-black top">
        <div className="container">
          <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
            <div className="col-lg-12 d-block">
              <div className="row d-flex">
                <div className="col-md pr-4 d-flex topper align-items-center">
                  <div className="icon mr-2 d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <span className="text">+ 1235 2355 98</span>
                </div>
                <div className="col-md pr-4 d-flex topper align-items-center">
                  <div className="icon mr-2 d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-paper-plane"></i>
                  </div>
                  <span className="text">youremail@email.com</span>
                </div>
                <div className="col-md-5 pr-4 d-flex topper align-items-center text-lg-right justify-content-end">
                  <p className="mb-0 register-link">
                    <a
                      title="Login"
                      href="#"
                      className="mr-3 open-login "
                      onClick={() => togglePopup(true)}
                    >
                      Sign Up
                    </a>
                    {/* {isopen ? <Login/> : ""} */}
                    <a href="#" onClick={() => togglePopup(true)}>
                      Sign In
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav
        className={`navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light site-navbar-target ${navClass}`}
        id="ftco-navbar"
      >
        <div className="container">
          <a className="navbar-brand" href="index.html">
            Health+
          </a>
          <button
            className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="oi oi-menu"></span> Menu
          </button>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav nav ml-auto">
              <li className="nav-item">
                <a href="#home-section" class="nav-link">
                  <span>Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#about-section" class="nav-link">
                  <span>About</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#department-section" class="nav-link">
                  <span>Department</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#doctor-section" class="nav-link">
                  <span>Doctors</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#blog-section" class="nav-link">
                  <span>Blog</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact-section" class="nav-link">
                  <span>Contact</span>
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link" onClick={() => togglePopup(true)}>
                  <span>SignUp</span>
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link" onClick={() => togglePopup(true)}>
                  <span>SignIn</span>
                </a>
              </li>
              <li className="nav-item cta mr-md-2">
                <a class="nav-link" onClick={() => togglePopup(true)}>
                  Appointment
                </a>
              </li>
              {isopen ? <Login togglePopup={togglePopup} /> : ""}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Nav;
