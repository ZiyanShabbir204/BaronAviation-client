import React from "react";

export default function Hero() {
  return (
    <section className="pageHeader -type-1">
      <div className="pageHeader__bg">
        <img src="/img/vision/vision-hero.jpg" alt="image" />
        <div className="overlay"></div>
      </div>

      <div className="container">
        <div className="row justify-center">
          <div className="col-12">
            <div className="pageHeader__content">
              <h1 className="pageHeader__title hero-heading ">Our Vision</h1>

              <p className="pageHeader__text text-rajdhani ">
                <span className="text-gradient-vivid-orange">
                  The Baron Aviation{" "}
                </span>{" "}
                aims to be the premier provider of luxury helicopter
                experiences, delivering unmatched service for discerning
                travelers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
