import { homes, pages, tours } from "@/data/menu";

import { Link, useLocation } from "react-router-dom";

import React from "react";

export default function Menu() {
  const { pathname } = useLocation();
  return (
    <>
      <div className="xl:d-none ml-30">
        <div className="desktopNav">
          <div className="desktopNav__item">
            <Link to="/">Home</Link>
          </div>
          <div className="desktopNav__item">
            <Link to="/our-vision">Our Vision</Link>
          </div>

          <div className="desktopNav__item">
            <Link to="/tailored-packages">Tailored Packages</Link>
          </div>

          <div className="desktopNav__item">
            <Link to="/contact">Contact Us</Link>
          </div>

          <div className="desktopNav__item">
            <Link to="/corporate">Corporate</Link>
          </div>
        </div>
      </div>
    </>
  );
}
