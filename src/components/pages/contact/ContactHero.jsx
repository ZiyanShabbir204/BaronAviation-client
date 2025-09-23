import React from "react";

export default function ContactHero() {
  return (
    <section className="pageHeader -type-1">
      <div className="pageHeader__bg">
        <img src="/img/helicopter/TPS00883-min.JPG" alt="image" />
        <div className="overlay"></div>
      </div>

      <div className="container">
        <div className="row justify-center">
          <div className="col-12">
            <div className="pageHeader__content">
              <h1 className="pageHeader__title hero-heading">
                contact us
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
