import { useState } from "react";
import "./offerServices.css";
import Services from "./Services";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper/modules";
import { testimonialsFive } from "@/data/testimonials";
import { featuresFive } from "@/data/features";
export default function OfferServices() {
  const [showServices, setShowServices] = useState(4);
  return (
    <section className="layout-pt-xl layout-pb-xl">
      <div className="container">
        <div className="row x-gap-60">
          <div className="col-lg-7 col-md-7 offer-service-text">
            <div
              className="tag"
              style={{
                color: "white",
              }}
            >
              What We Offer
            </div>
            <h1 className="text-gradient-vivid-orange">
              The Baron Aviation Exclusive Services
            </h1>
            <p>
              Experience aviation like never before with The Baron Aviation
              exclusive services, designed for those who demand the best. From
              personalized flight itineraries to unparalleled comfort, we ensure
              every detail of your journey is perfected. Trust The Baron
              Aviation to transform your travel experience into one of luxury
              and sophistication
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

          <div
            data-aos="fade-up"
            data-aos-delay=""
            className="col-lg-5 col-md-5"
          >
            <div className="js-testimonials-slider-1">
              <div className="swiper-wrapper">
                <Swiper
                  spaceBetween={30}
                  className="w-100"
                  style={{ maxWidth: "100%" }}
                  modules={[EffectCards]}
                  effect="cards"
                  grabCursor={true}
                >
                  {testimonialsFive.map((elm, i) => (
                    <SwiperSlide key={i}>
                      <img
                        src={elm.img}
                        alt="image"
                        className="service-image"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="pagination -type-1 justify-center pt-60 md:pt-40 js-testimonials-pagination">
                <div className="pagination__button"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
