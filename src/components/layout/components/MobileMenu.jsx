import { menuData } from "@/data/mobileMenu";
import { Link, useLocation } from "react-router-dom";

import React, { useState } from "react";
import { useAuth } from "@/contexts/auth.context";
const socialMediaLinks = [
  { id: 1, class: "icon-facebook", href: "#" },
  { id: 2, class: "icon-twitter", href: "#" },
  { id: 3, class: "icon-instagram", href: "#" },
  { id: 4, class: "icon-linkedin", href: "#" },
];
export default function MobileMenu({ mobileMenuOpen, setMobileMenuOpen }) {
  const [activeSub, setActiveSub] = useState("");
  const { user } = useAuth();

  const { pathname } = useLocation();
  return (
    <div
      data-aos="fade"
      data-aos-delay=""
      className={`menu js-menu ${mobileMenuOpen ? "-is-active" : ""} `}
      style={
        mobileMenuOpen
          ? { opacity: "1", visibility: "visible" }
          : { pointerEvents: "none", visibility: "hidden" }
      }
    >
      <div
        onClick={() => setMobileMenuOpen(false)}
        className="menu__overlay js-menu-button"
      ></div>

      <div className="menu__container">
        <div className="menu__header">
          <h4>Main Menu</h4>

          <button
            onClick={() => setMobileMenuOpen(false)}
            className="js-menu-button button-gradient text-white"
          >
            <i className="icon-cross text-10"></i>
          </button>
        </div>

        <div className="menu__content">
          <ul
            className="menuNav js-navList -is-active"
            style={{ maxHeight: "calc(100vh - 262px)", overflowY: "auto" }}
          >
            {menuData.map((elm, i) => (
              <li key={i} className="menuNav__item -has-submenu js-has-submenu">
                <Link to={elm.href}> {elm.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {!user && (
          <div className="menu__footer">
            <Link
              to="/register"
              className="button -sm -outline-black rounded-200  ml-30 button-gradient text-white"
            >
              Sign up
            </Link>

            <Link
              to="/login"
              className="button -sm -outline-black rounded-200  ml-30 button-gradient text-white"
            >
              Log in
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
