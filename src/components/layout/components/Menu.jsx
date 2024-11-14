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
            <a href="/tours">Tours</a>
          </div>
          <div className="desktopNav__item">
            <a href="#">Contact Us</a>
          </div>
          <div className="desktopNav__item">
            <a href="#">Corporate</a>
          </div>
        </div>
      </div>
    </>
  );
}
