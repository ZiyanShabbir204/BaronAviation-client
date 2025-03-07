import { useEffect, useState } from "react";
import HeaderSerch from "../components/HeaderSerch";
import Currency from "../components/Currency";
import MobileMenu from "../components/MobileMenu";

import { Link, useNavigate } from "react-router-dom";

export default function Header6() {
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
        className={`header -type-7 js-header  ${addClass ? "-is-sticky" : ""}`}
      >
        <div className="header__container container">
          <div className="headerMobile__left">
            <button
              className="header__menuBtn js-menu-button"
              onClick={() => setMobileMenuOpen(true)}
            >
              <i className="icon-main-menu text-white"></i>
            </button>
          </div>

          <div className="header__left xl:d-none text-white">
            <HeaderSerch white={true} />
          </div>

          <div className="header__center">
            <div className="header__logo">
              <Link to="/" className="header__logo">
                <img src="/img/general/logo-light.svg" alt="logo icon" />
              </Link>
            </div>
          </div>

          <div className="headerMobile__right">
            <button
              onClick={() => pageNavigate("/tour-list-1")}
              className="d-flex"
            >
              <i className="icon-search text-white text-18"></i>
            </button>

            <button
              onClick={() => pageNavigate("/login")}
              className="d-flex ml-20"
            >
              <i className="icon-person text-white text-18"></i>
            </button>
          </div>

          <div className="header__right">
            <div className="text-white">
              <Currency
                parentClass={
                  "headerDropdown -hover-light text-white js-form-dd"
                }
              />
            </div>

            <Link to="/register" className="text-white ml-10">
              Sign up
            </Link>

            <Link
              to="/login"
              className="button -sm -dark-1 bg-dark-grey rounded-200 ml-30"
            >
              Log in
            </Link>

            <button
              className="header__menuBtn ml-30 js-menu-button"
              onClick={() => setMobileMenuOpen(true)}
            >
              <i className="icon-main-menu text-white"></i>
            </button>
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
