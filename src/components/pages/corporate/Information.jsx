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
              Tailored Travel, Priority Access & Premium Perks
            </h1>
          </div>

          <div className="col-lg-12">
            <p
              style={{
                textAlign: "center",
              }}
            >
              Elevate your business travel with Baron Aviation’s exclusive
              Corporate Membership. Our exclusive program offers a range of
              elite benefits designed to make your travel more efficient,
              seamless, and luxurious. Enjoy priority access, effortless
              scheduling, and personalized solutions that cater specifically to
              your business needs. With our bespoke services, you can focus on
              what matters most while we take care of the rest. Join today and
              experience corporate travel at its finest—designed for those who
              demand excellence
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
