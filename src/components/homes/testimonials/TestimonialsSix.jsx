import { featuresSeven } from "@/data/features";
import { testimonialsSix } from "@/data/testimonials";

import React from "react";

export default function TestimonialsSix() {
  return (
    <section className="layout-pt-md   layout-pb-xl">
      <div className="container">
        <div className="row">
          <div
            className="col-12"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* <h2
              data-aos="fade-up"
              data-aos-delay=""
              className="text-gradient-vivid-orange"
            >
              What our Travelers are saying
            </h2> */}
            <img
              src="/img/testimonials/yellow-five-stars.webp"
              style={{
                width: "300px",
              }}
            />
          </div>
        </div>

        <div className="row y-gap-30 pt-40 md:pt-30">
          {testimonialsSix.map((elm, i) => (
            <div key={i} className="col-lg-3 col-md-6">
              <div className="background-dark-gray tes-card py-30 px-30 rounded-12">
                <div>
                  <h4 className="text-18 fw-500 text-accent-1">
                    {elm.comment}
                  </h4>
                  <div className="fw-500 mt-15">“{elm.desc}”</div>
                </div>

                <div>
                  <div className="line mt-20 mb-20"></div>

                  <div className="d-flex items-center">
                    <img
                      src={elm.img}
                      alt="image"
                      className="size-60 object-cover rounded-full"
                    />

                    <div className="ml-20">
                      <div className="fw-500 lh-15">{elm.name}</div>
                      <div className="text-14 lh-15">{elm.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
