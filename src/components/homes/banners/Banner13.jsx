import React from "react";
import "./banner13.css";
export default function Banner13() {
  return (
    <section className="cta -type-4 -style-2 layout-pt-lg ">
      <div className="container  ">
        <div className="cta__content banner-13">
          <div className="row justify-between">
            <div className="col-lg-6  col-sm-12 banner-13-text">
              <h2
                data-aos="fade-up"
                data-aos-delay=""
                className="text-24 lh-13"
              >
                Become Our Member Today
              </h2>

              <p data-aos="fade-up" data-aos-delay="" className="mt-10">
                Avail exclusive benefits – travel in luxury!
              </p>

              <button
                data-aos="fade-right"
                data-aos-delay=""
                className="button -md button-gradient text-white mt-10"
              >
                JOIN TODAY
                <i className="icon-arrow-top-right ml-10"></i>
              </button>
            </div>
            <div className="col-lg-6 col-sm-12 banner-13-cta-image"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
