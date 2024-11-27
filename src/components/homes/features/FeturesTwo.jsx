import { featuresTwo } from "@/data/features";

import { Link } from "react-router-dom";
import React from "react";
import "./feturesTwo.css";

export default function FeturesTwo() {
  return (
    <section className="relative layout-pt-xl layout-pb-xl feature-section">
      <div className="relative xl:unset container">
        <div className="rounded-12">
          {/* <div className="sectionBg">
            <img
              src="/img/feature-bg.png"
              alt="image"
              className="img-ratio rounded-12 md:rounded-0"
            />
          </div> */}
          <div className="row y-gap-30 justify-center items-center ">
            <div className="col-lg-6 col-md-6 p-30">
              <h2
                data-aos="fade-up"
                data-aos-delay=""
                className=" hero-heading"
              >
                <span className="text-gradient-vivid-orange text-rajdhani">
                  TOP CHOICE
                </span>{" "}
                IN EXCLUSIVE CORPORATE AIR TRAVEL, POWERED BY The Baron Aviation
              </h2>

              <p data-aos="fade-up" data-aos-delay="" className="mt-10">
                At The Baron Aviation, we provide exquisite helicopter travel
                that combines unparalleled luxury, time efficiency, and
                unwavering safety. Our service ensures punctuality, allowing you
                to arrive on time for important business meetings. With The
                Baron Aviation, enjoy seamless, comfortable journeys
                where your time, comfort, and security are our top priorities.
              </p>

              <div class="item about-extra-text mt-20">
                <ul className="bullet-points">
                  <li>Book by appointment only</li>
                  <li>Pay with Convenience</li>
                  <li>Smooth Rides in Top-of-the-line helicopter </li>
                  <li>Free Consultation </li>
                  <li>Customize Travel Plan @ xxxx- xxx - x</li>
                </ul>
              </div>

              <Link
                to={"/tour-list-1"}
                data-aos="fade-right"
                data-aos-delay=""
                className="button -md button-gradient text-white mt-30 fit-content"
                style={{
                  width: "fit-content",
                }}
              >
                01 LUXURY TRAVEL PARTNER
              </Link>
            </div>

            <div className="col-md-6">
              <div
                data-aos="fade-left"
                data-aos-delay=""
                className="featuresGrid"
              >
                <div className="featuresGrid__item px-40 py-40 text-center bg-feature bg-feature-1 rounded-12"></div>
                <div className="featuresGrid__item px-40 py-40 text-center bg-feature bg-feature-2 rounded-12"></div>
                <div className="featuresGrid__item px-40 py-40 text-center bg-feature bg-feature-3 rounded-12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
