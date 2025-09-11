import { Link } from "react-router-dom";
import React from "react";
import { scroller } from "react-scroll";

export default function Banner() {
  const scrollToBookNow = () => {
    scroller.scrollTo("bookNow", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -window.innerHeight / 3, // Adjusts the offset to center
    });
  };

  return (
    <section className="cta -type-2">
      <div className="cta__bg">
        <div className="cta__image">
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: -1, // Place behind other elements
            }}
          >
            <source src="/video/banner-2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-7">
            <div className="cta__content">
              <h2
                data-aos="fade-up"
                data-aos-delay=""
                className="text-40 md:text-30  text-vivid-orange lh-13"
              >
                Take Off with 10% Off
              </h2>

              <h3
                data-aos="fade-up"
                data-aos-delay=""
                className="text-24 md:text-16 mt-10  lh-13"
              >
                Enjoy an exclusive{" "}
                <span className="text-vivid-orange">
                  {" "}
                  10% discount on your first flight
                </span>{" "}
                with Baron Aviation.
              </h3>

              <p data-aos="fade-up" data-aos-delay="" className="mt-10">
                Use promo code{" "}
                <span className="text-vivid-orange"> BaronAviator10 </span> and
                experience executive-class air travel at its finest.
              </p>

              <p data-aos="fade-up" data-aos-delay="" className="mt-10">
                This is a limited-time offer — secure your seat and elevate your
                journey today.
              </p>

              <div className="mt-30 md:mt-20">
                <button
                  onClick={scrollToBookNow}
                  data-aos="fade-right"
                  data-aos-delay=""
                  className="button -md -dark-1 button-gradient text-white"
                >
                  Book Now
                  <i className="icon-arrow-top-right ml-10 text-16"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
