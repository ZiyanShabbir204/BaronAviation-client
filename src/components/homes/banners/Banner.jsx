import { Link } from "react-router-dom";
import React from "react";

export default function Banner() {
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
                className="text-40 md:text-30  lh-13"
              >
                Enjoy <span className="text-vivid-orange"> 10% off</span> your
                first flight with The Baron Aviation
              </h2>

              <p data-aos="fade-up" data-aos-delay="" className="mt-10">
                Use promo code{" "}
                <span className="text-vivid-orange"> BaronAviator10 </span>to
                unlock your elite experience.
              </p>

              <p data-aos="fade-up" data-aos-delay="" className="mt-10">
                Limited time offer, don't miss the opportunity
              </p>

              <div className="mt-30 md:mt-20">
                <button
                  data-aos="fade-right"
                  data-aos-delay=""
                  className="button -md -dark-1 button-gradient text-white"
                >
                  <Link to="/tour-list-1">
                    Book Now
                    <i className="icon-arrow-top-right ml-10 text-16"></i>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
