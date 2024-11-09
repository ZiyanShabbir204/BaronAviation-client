import { destinationsSix } from "@/data/destinations";

import { Link } from "react-router-dom";
import React from "react";

export default function TourTypeOne() {
  return (
    <section className="layout-pt-xl mb-30 mt-30 layout-pb-xl background-dark-gray">
      <div className="container">
        <div className="row justify-between items-end y-gap-10">
          <div className="col-auto">
            <h2
              data-aos="fade-up"
              data-aos-delay=""
              className="text-30 md:text-24 text-gradient-vivid-orange "
            >
              LUXURY FROM EVERY ANGLE{" "}
            </h2>
          </div>

          <div className="col-auto">
            <Link
              to={"#"}
              data-aos="fade-right"
              data-aos-delay=""
              className="buttonArrow d-flex items-center "
            >
              <span>See all</span>
              <i className="icon-arrow-top-right text-16 ml-10"></i>
            </Link>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay=""
          className="grid -type-1 pt-40 sm:pt-20"
        >
          {destinationsSix.map((elm, i) => (
            <div
              key={i}
              className="featureCard -type-1 -hover-1 overflow-hidden rounded-12 px-30 py-30"
            >
              <div className="featureCard__image">
                <img src={elm.imgSrc} alt="image" />
              </div>

              <div className="featureCard__content">
                {/* <h4 className="text-white">{elm.title}</h4> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
