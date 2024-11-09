import React from "react";

export default function Hero() {
  return (
    <section className="pageHeader -type-1">
      <div className="pageHeader__bg">
        <img src="/img/pageHeader/1.jpg" alt="image" />
        <img src="/img/hero/1/shape.svg" alt="image" />
      </div>

      <div className="container">
        <div className="row justify-center">
          <div className="col-12">
            <div className="pageHeader__content">
              <h1 className="pageHeader__title">Our Vision</h1>

              <p className="pageHeader__text">

                <span className="text-gradient-vivid-orange">The Baron Aviation </span> aims to be the premier provider of luxury
                helicopter experiences, delivering unmatched service for
                discerning travelers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
