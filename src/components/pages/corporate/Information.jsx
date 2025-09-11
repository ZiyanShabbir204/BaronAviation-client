import React, { useState } from "react";
import { scroller } from "react-scroll";

export default function Information() {
  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="row y-gap-20 justify-between">
          <div
            className="col-lg-12"
            style={{
              textAlign: "center",
            }}
          >
            <h1 className="text-gradient-vivid-orange">
              Corporate Membership – Tailored for Leaders{" "}
            </h1>
          </div>

          <div className="col-lg-12">
            <p
              style={{
                textAlign: "center",
              }}
            >
              Redefine the way you travel with Baron Aviation’s Corporate
              Membership, created for executives and business leaders who demand
              efficiency and excellence.
            </p>
            <p
              style={{
                textAlign: "center",
              }}
            >
              Enjoy priority access, flexible scheduling, and premium perks that
              make every journey seamless. From personalized itineraries to
              dedicated support, our membership is designed to save you time
              while adding unmatched comfort and convenience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
