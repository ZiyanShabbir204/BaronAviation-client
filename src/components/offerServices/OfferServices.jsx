import { useState } from "react";
import "./offerServices.css";
import Services from "./Services";
export default function OfferServices() {
  const [showServices, setShowServices] = useState(4);
  return (
    <section className="layout-pt-xl layout-pb-xl">
      <div className="container">
        <div>
          <div className="tag">What We Offer</div>
          <h1 className="text-vivid-orange">Baron's Exclusive Services</h1>
          <p>
            Experience aviation like never before with Baron’s exclusive
            services, designed for those who demand the best. From personalized
            flight itineraries to unparalleled comfort, we ensure every detail
            of your journey is perfected. Trust Baron to transform your travel
            experience into one of luxury and sophistication
          </p>
          <Services showServices={showServices} />
          <button
            className="button -sm button-gradient text-white mt-30"
            onClick={() => setShowServices(6)}
          >
            View All Services
          </button>
        </div>
        <div></div>
      </div>
    </section>
  );
}
