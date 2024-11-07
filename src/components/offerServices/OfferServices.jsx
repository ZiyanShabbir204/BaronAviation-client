import { useState } from "react";
import "./offerServices.css";
import Services from "./Services";
export default function OfferServices() {
  const [showServices, setShowServices] = useState(4);
  return (
    <section className="layout-pt-xl layout-pb-xl">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-7 offer-service-text">
            <div
              className="tag"
              style={{
                color: "white",
              }}
            >
              What We Offer
            </div>
            <h1 className="text-gradient-vivid-orange">
              Baron's Exclusive Services
            </h1>
            <p>
              Experience aviation like never before with Baron’s exclusive
              services, designed for those who demand the best. From
              personalized flight itineraries to unparalleled comfort, we ensure
              every detail of your journey is perfected. Trust Baron to
              transform your travel experience into one of luxury and
              sophistication
            </p>
            <Services showServices={showServices} />
            <button
              className="button -sm button-gradient text-white mt-30"
              onClick={() =>
                showServices === 6 ? setShowServices(4) : setShowServices(6)
              }
            >
              View {showServices === 6 ? "Less" : "All"} Services
            </button>
          </div>
          <div className="col-lg-6 col-md-5 offer-service-image">
            <img src="/img/service/service.png" />
          </div>
        </div>
      </div>
    </section>
  );
}
