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
              EXPERIENCE TAILORED TRAVEL SOLUTIONS, PRIORITY ACCESS, AND PREMIUM
              PERKS EXCLUSIVELY FOR OUR CORPORATE MEMBERS.
            </h1>
          </div>

          <div className="col-lg-12">
            <p
              style={{
                textAlign: "center",
              }}
            >
              Enhance your business travel with The Baron Aviation’s Corporate
              Membership. Enjoy elite benefits, effortless scheduling, and
              custom solutions that put your business first. Join us today to
              unlock seamless, efficient, and luxurious travel—crafted just for
              you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
