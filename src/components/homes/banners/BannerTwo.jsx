import { Link } from "react-router-dom";
import React from "react";

export default function BannerTwo() {
  return (
    <section className="">
      <div className="container">
        <div className="bg-gradient-vivid-orange py-50 px-50 rounded-12">
          <div className="row y-gap-20 justify-between items-center">
            <div className="col-auto">
              <h2
                data-aos="fade-up"
                data-aos-delay=""
                className="text-20 fw-500 text-white"
              >
                Experience the Luxury of Flight{" "}
              </h2>
            </div>

            <div className="col-auto">
              <button
                data-aos="fade-right"
                data-aos-delay=""
                className="button -md -dark-1 bg-dark-grey text-accent-1"
              >
                <Link to="/tour-list-1">
                  Book Now
                  <i className="icon-arrow-top-right ml-10 "></i>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
