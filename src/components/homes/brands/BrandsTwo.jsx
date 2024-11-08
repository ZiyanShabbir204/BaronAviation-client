import { clients } from "@/data/clients";

import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function BrandsTwo() {
  return (
    <section className="logo-slider-section">
      <div className="container">
        <h2 className="trusted-corporate text-vivid-orange text-gradient-vivid-orange">
          TRUSTED BY THE CORPORATES
        </h2>
        <div data-aos="fade-up" data-aos-delay="" className="">
          <Swiper
            spaceBetween={30}
            className="w-100"
            modules={[Autoplay]}
            autoplay
            loop={true}
            breakpoints={{
              300: {
                slidesPerView: 2,
              },
              500: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 6,
              },
            }}
          >
            {clients.map((elm, i) => (
              <SwiperSlide key={i}>
                <div key={i} className=" d-flex justify-center items-center ">
                  <img
                    style={{
                      height: "30px",
                      width: "100px",
                      objectFit: "contain",
                      filter: "brightness(0) invert(1)",
                    }}
                    src={elm}
                    alt="image"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
