import React from "react";

export default function Hero() {
  return (
    <section className="pageHeader -type-1">
      <div className="pageHeader__bg">
        <img src="/img/helicopter/TPS00834-min.JPG" alt="image" />
        <div className="overlay"></div>
      </div>

      <div className="container">
        <div className="row justify-center">
          <div className="col-12">
            <div className="pageHeader__content">
              <h1 className="pageHeader__title hero-heading ">Our Vision</h1>

              <p className="pageHeader__text text-rajdhani ">
                <span className="text-gradient-vivid-orange">
                  Baron Aviation{" "}
                </span>{" "}
                aims to be the foremost provider of luxury helicopter travel,
                offering distinguished service, exceptional comfort, and
                memorable experiences for discerning travelers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
