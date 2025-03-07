import React, { useEffect, useState } from "react";
import Menu from "../components/Menu";
import Currency from "../components/Currency";
import MobileMenu from "../components/MobileMenu";

import { Link, useNavigate } from "react-router-dom";

export default function Header3() {
  const navigate = useNavigate();

  const pageNavigate = (pageName) => {
    navigate(pageName);
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [addClass, setAddClass] = useState(false);

  // Add a class to the element when scrolled 50px
  const handleScroll = () => {
    if (window.scrollY >= 2) {
      setAddClass(true);
    } else {
      setAddClass(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header
        className={`header -type-3 js-header ${addClass ? "-is-sticky" : ""}`}
      >
        <div className="header__container container ">
          <div className="headerMobile__left">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="header__menuBtn js-menu-button"
            >
              <i className="icon-main-menu"></i>
            </button>
          </div>

          <div className="header__logo">
            <Link to="/" className="header__logo baron-logo">
              <img src="/img/hero/3/logo.PNG" alt="logo icon" />
            </Link>
            <Link to="/" className="header__logo baron-text">
              <img src="/img/hero/3/logo-text.PNG" alt="logo icon" />
            </Link>

            {/* <Menu /> */}
          </div>
          
          {/* <div className="headerMobile__right">
            <button
              onClick={() => pageNavigate("/tour-list-1")}
              className="d-flex"
            >
              <i className="icon-search text-18"></i>
            </button>

            <button
              onClick={() => pageNavigate("/login")}
              className="d-flex ml-20"
            >
              <i className="icon-person text-18"></i>
            </button>
          </div> */}

          <div className="header__right">
            <div className="link-container">
           
            <Link to="#" className="ml-20 text-white hover-vivid-orange ">
              Home
            </Link>
            <Link to="#" className="ml-20 text-white hover-vivid-orange">
              About Us
            </Link>

            <Link to="#" className="ml-20 text-white hover-vivid-orange">
              Contact
            </Link>
            <Link to="#" className="ml-20 text-white hover-vivid-orange">
              Our Blogs
            </Link>

            </div>
            
            <div className="d-flex  width-[100%] ">
            <Link
              to="/register"
              className="button -sm -outline-black rounded-200 text-black ml-30 bg-vivid-orange"
            >
              Sign up
            </Link>

            <Link
              to="/login"
              className="button -sm -outline-black rounded-200 text-black ml-30 bg-vivid-orange"
            >
              Log in
            </Link>

            </div>

            
          </div>
        </div>
      </header>
      <MobileMenu
        setMobileMenuOpen={setMobileMenuOpen}
        mobileMenuOpen={mobileMenuOpen}
      />
    </>
  );
}
