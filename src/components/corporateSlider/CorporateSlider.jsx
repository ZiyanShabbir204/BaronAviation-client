import { clients } from "@/data/clients";

import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { corporateSliderData } from "./data";
import "./corporateSlider.css";

export default function CorporateSlider() {
  return (
    <section>
      <div className="container">
        <h2 className="text-vivid-orange text-gradient-vivid-orange">
          WHY PARTNER WITH THE BARON AVIATION
        </h2>
        <div data-aos="fade-up" data-aos-delay="" className="pt-40 sm:pt-20">
          <Swiper
            spaceBetween={30}
            className="w-100"
            modules={[Autoplay]}
            autoplay
            loop={true}
            breakpoints={{
              300: {
                slidesPerView: 1,
              },
              500: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {corporateSliderData.map((elm, i) => (
              <SwiperSlide key={i}>
                <div
                  key={i}
                  className=" d-flex justify-center items-center corporate-slide"
                >
                  <img
                    style={{
                      width: "100%",
                    }}
                    src={elm.img}
                    alt="image"
                  />
                  <div className="corporate-slide-text-wrapper">
                    <h2 className="corporate-slide-text">{elm.title}</h2>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
