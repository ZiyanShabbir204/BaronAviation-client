import React, { useState } from "react";
import { scroller } from "react-scroll";

export default function Information() {
  const [more, setMore] = useState(false);
  return (
    <section className="layout-pt-lg">
      <div className="container">
        <div className="row y-gap-20 justify-between">
          <div
            className="col-lg-12"
            style={{
              textAlign: "center",
            }}
          >
            <h1 className="text-gradient-vivid-orange">
              THE BARON AVIATION GROUP
            </h1>
            <h2 className="hero-heading ">
              Redefining Air Travel Across Pakistan
            </h2>
          </div>

          <div className="col-lg-12">
            <p>
              At Baron Aviation, our vision is to transform air travel in
              Pakistan by combining luxury, accessibility, and world-class
              expertise. We go beyond being an air charter service — we are a
              bridge connecting people, places, and opportunities, with tailored
              aviation solutions that reach from bustling cities to the most
              remote landscapes of our country.
            </p>

            {more && (
              <>
                <p>
                  With a foundation built on international aviation experience,
                  we uphold the highest standards of service and safety,
                  ensuring every journey is seamless, secure, and distinguished.
                  From corporate clients who value efficiency to VIPs seeking
                  privacy and refinement, Baron Aviation delivers travel
                  designed around those who expect more.
                </p>
                <p>
                  Our commitment extends beyond service — we integrate
                  sustainable practices into our operations, making conscious
                  choices that respect both our passengers and our planet. For
                  us, every flight is not just about reaching a destination, but
                  about shaping the future of air travel in Pakistan.
                </p>
              </>
            )}

            <button
              className="button button-gradient text-white -md mt-30 m-auto"
              onClick={() => setMore(true)}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
