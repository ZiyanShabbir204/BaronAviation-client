import { featuresTwo } from "@/data/features";

import { Link } from "react-router-dom";
import React from "react";
import "./feturesTwo.css";
import { scroller } from "react-scroll";

export default function FeturesTwo() {
  const scrollToBookNow = () => {
    scroller.scrollTo("bookNow", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -window.innerHeight / 3, // Adjusts the offset to center
    });
  };

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
            <div className="col-lg-6 col-md-6">
              <h2
                data-aos="fade-up"
                data-aos-delay=""
                className=" hero-heading"
              >
                <span className="text-gradient-vivid-orange text-rajdhani">
                  Baron Aviation{" "}
                </span>{" "}
                – Redefining Corporate Air Travel
              </h2>

              <p data-aos="fade-up" data-aos-delay="" className="mt-10">
                At{" "}
                <span className="text-gradient-vivid-orange ">
                  Baron Aviation
                </span>
                , we specialize in exclusive helicopter travel tailored for
                discerning corporate clients. Our service blends luxury,
                efficiency, and uncompromising safety — ensuring you arrive on
                time, every time.
              </p>

              <p data-aos="fade-up" data-aos-delay="" className="mt-5">
                Whether it’s an important business meeting or a custom executive
                journey, Baron Aviation delivers seamless travel experiences
                designed around your schedule. With state-of-the-art helicopters
                and a commitment to comfort and security, we make every flight
                as remarkable as the destination.
              </p>

              <h3
                data-aos="fade-up"
                data-aos-delay=""
                className="text-rajdhani hero-heading mt-20"
              >
                Why Choose Baron Aviation?
              </h3>
              <div class="item about-extra-text mt-10">
                <ul className="bullet-points">
                  <li>
                    {" "}
                    <span className="text-gradient-vivid-orange ">
                      By Appointment Only{" "}
                    </span>{" "}
                    – personalized, discreet, and exclusive.
                  </li>
                  <li>
                    {" "}
                    <span className="text-gradient-vivid-orange ">
                      Flexible Payment Options{" "}
                    </span>{" "}
                    – designed for your convenience.
                  </li>
                  <li>
                    {" "}
                    <span className="text-gradient-vivid-orange ">
                      Premium Fleet{" "}
                    </span>{" "}
                    – top-of-the-line helicopters for smooth, reliable journeys.{" "}
                  </li>
                  <li>
                    {" "}
                    <span className="text-gradient-vivid-orange ">
                      Complimentary Consultation{" "}
                    </span>{" "}
                    – plan your travel with our experts.{" "}
                  </li>
                  <li>
                    {" "}
                    <span className="text-gradient-vivid-orange ">
                      Customized Travel Plans{" "}
                    </span>{" "}
                    – tailored to your business or personal needs.
                  </li>
                </ul>
              </div>

              <p
                data-aos="fade-up"
                data-aos-delay=""
                className="mt-5"
                style={{
                  fontWeight: "bold",
                }}
              >
                Start your journey today: +92 326 0000121
              </p>

              <Link
                onClick={scrollToBookNow}
                data-aos="fade-right"
                data-aos-delay=""
                className="button -md button-gradient text-white mt-30 fit-content"
                style={{
                  width: "fit-content",
                }}
              >
                Book Now
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
