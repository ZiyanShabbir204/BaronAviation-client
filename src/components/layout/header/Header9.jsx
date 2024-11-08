import { useEffect, useState } from "react";

import Currency from "../components/Currency";
import MobileMenu from "../components/MobileMenu";
import Menu from "../components/Menu";

import { Link, useNavigate } from "react-router-dom";

export default function Header9() {
  const navigate = useNavigate();

  const pageNavigate = (pageName) => {
    navigate(pageName);
  };
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [addClass, setAddClass] = useState(false);

  // Add a class to the element when scrolled 50px
  const handleScroll = () => {
    if (window.scrollY >= 50) {
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
        className={`header -type-10 js-header  ${addClass ? "-is-sticky" : ""}`}
      >
        <div className="header__container">
          <div className="headerMobile__left">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="header__menuBtn js-menu-button"
            >
              <i className="icon-main-menu text-white"></i>
            </button>
          </div>

          <div className="header__left header_left-flex">
            <div className="header__logo">
            <Link to="/" className="header__logo baron-logo">
              <img src="/img/hero/3/logo.PNG" alt="logo icon" />
            </Link>
            <Link to="/" className="header__logo baron-text">
              <img src="/img/hero/3/logo-text.PNG" alt="logo icon" />
            </Link>

              <div className="text-white" style={{flex:1}}>
                <Menu />
              </div>
            </div>
          </div>

          <div className="headerMobile__right">
            <button
              onClick={() => pageNavigate("/tour-list-1")}
              className="d-flex"
            >
              <i className="icon-search text-18 text-white"></i>
            </button>

            <button
              onClick={() => pageNavigate("/login")}
              className="d-flex ml-20"
            >
              <i className="icon-person text-18 text-white"></i>
            </button>
          </div>

          <div className="header__right">
            <Link to="/register"className="button -sm  button-gradient text-white" >
              Sign up
            </Link>

            <Link
              to="/login"
              className="button -sm button-gradient text-white ml-30"
            >
              Log in
            </Link>
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
