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
            <h1 className="text-gradient-vivid-orange">
              THE BARON AVIATION GROUP
            </h1>
            <h2 className="hero-heading ">
              SETTING NEW STANDARDS FOR AIR TRAVEL ACROSS PAKISTAN
            </h2>
          </div>

          <div className="col-lg-5">
            <p>
              At The Baron Aviation, our vision is to set a new standard for
              luxury and accessibility in air travel across Pakistan. We aim to
              be more than just an air rental service—we are a bridge between
              people, places, and possibilities, offering tailored aviation
              solutions that span from vibrant urban hubs to the farthest
              corners of our beautiful country. Backed by international aviation
              expertise, we deliver a level of service and safety that’s second
              to none, ensuring each flight is as seamless as it is secure. We
              are here for those who value swift, exclusive travel, from
              corporate clients needing efficient solutions to VIPs seeking
              privacy and elegance in the skies. Our commitment to sustainable
              practices means that our impact is as thoughtful as our service,
              with environmentally conscious choices woven into every aspect of
              our operation.
            </p>

            <p>
              For adventurers wishing to experience Pakistan from an entirely
              new perspective, The Baron Aviation offers a bird’s-eye view of
              the country's vast landscapes and rich heritage. Whether it’s an
              unforgettable sightseeing tour or a customized travel plan
              designed to meet unique needs, we pride ourselves on meeting the
              evolving demands of our clients with flexibility, luxury, and
              care. We aspire to be Pakistan’s go-to platform for luxury air
              travel, offering a comprehensive range of aviation services that
              reflect our dedication to excellence and a profound respect for
              the journeys that bring us all closer together.
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
