import { Link } from "react-router-dom";
import React from "react";
import { scroller } from "react-scroll";

export default function BannerHome() {
  const scrollToBookNow = () => {
    scroller.scrollTo("bookNow", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -window.innerHeight / 3, // Adjusts the offset to center
    });
  };

  return (
    <section className="">
      <div className="container">
        <div className="bg-gradient-vivid-orange py-50 px-50 rounded-12">
          <div className="row y-gap-20 justify-between items-center">
            <div className="col-auto">
              <h2 data-aos="fade-up" data-aos-delay="" className="text-white">
                Trusted by Those Who Demand the Best
              </h2>
            </div>

            <div className="col-auto">
              <button
                onClick={scrollToBookNow}
                data-aos="fade-right"
                data-aos-delay=""
                className="button -md -dark-1 bg-dark-grey text-accent-1"
              >
                Book Now
                <i className="icon-arrow-top-right ml-10 "></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
