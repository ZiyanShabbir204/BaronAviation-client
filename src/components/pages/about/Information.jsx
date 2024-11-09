import React from "react";
import { scroller } from "react-scroll";

export default function Information() {
  const scrollToBookNow = () => {
    scroller.scrollTo("learnMore", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -window.innerHeight / 3, // Adjusts the offset to center
    });
  };
  return (
    <section className="layout-pt-lg">
      <div className="container">
        <div className="row y-gap-20 justify-between">
          <div className="col-lg-6">
            <div className="tag">Established in 1949</div>
            <h1 className="text-gradient-vivid-orange">
              THE BARON AVIATION GROUP
            </h1>
            <h2 className="hero-heading ">
              FROM PAPER TRADING ROOTS TO LEADERS IN HOSPITALITY, NOW SETTING
              NEW STANDARDS IN AVIATION
            </h2>
          </div>

          <div className="col-lg-5">
            <p>
              For over seven decades, The Baron Aviation Group has built a
              legacy of innovation, resilience, and excellence across diverse
              industries. Beginning as a paper trading company in Pakistan, we
              carved out a reputation for integrity and commitment that remains
              at our core today. Our journey led us to make significant strides
              in the hospitality sector, where we’ve set new benchmarks in
              quality and service. Today, we’re taking that same pioneering
              spirit to new heights—entering the aviation industry with a vision
              to elevate standards and redefine customer experience. As we
              continue to grow, The Baron Aviation Group remains dedicated to
              the values that shaped our past, empowered our present, and
              inspire our future. Join us as we soar to new horizons, setting
              trends and transforming industries every step of the way
            </p>

            <button
              className="button button-gradient text-white -md mt-30"
              onClick={scrollToBookNow}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
