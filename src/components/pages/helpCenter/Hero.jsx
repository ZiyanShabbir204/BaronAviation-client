import React from "react";

export default function Hero() {
  return (
    <section className="pageHeader -type-1">
      <div className="pageHeader__bg">
        <img src="/img/hero/corporate.png" alt="image" />
        <div className="overlay"></div>
      </div>

      <div className="container">
        <div className="row justify-center">
          <div className="col-12">
            <div className="pageHeader__content">
              <h1 className="pageHeader__title hero-heading">
                Lorem Ipsum is simply dummy text of the printing
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
