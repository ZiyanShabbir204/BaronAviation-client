import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { tourData } from "@/data/tours";

import YoutubeVideo from "./YoutubeVideo";
import "./style.css";
import { videoData } from "./data";

export default function YoutubeVideos() {
  return (
    <>
      <section className="layout-pt-xl layout-pb-xl">
        <div className="container">
          <div className="row y-gap-10 justify-between items-center y-gap-10">
            <h2
              data-aos="fade-up"
              data-aos-delay=""
              className="text-30 text-gradient-vivid-orange"
              style={{
                textAlign: "center",
              }}
            >
              The Baron Aviation Walkthrough
            </h2>
          </div>
          <div className="slider-container">
            <div className="relative pt-20">
              <div className="js-section-slider">
                <div data-aos="fade-up" data-aos-delay="" className="">
                  <Swiper
                    spaceBetween={30}
                    className="w-100 overflow-visible"
                    navigation={{
                      prevEl: ".js-slider1-prev",
                      nextEl: ".js-slider1-next",
                    }}
                    modules={[Navigation, Pagination, Autoplay]}
                    loop
                    autoplay
                  >
                    {videoData.map((elm, i) => (
                      <SwiperSlide key={i}>
                        <YoutubeVideo
                          videoId={elm.videoId}
                          thumbnail={elm.thumbnail}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
            <button className="navRegular__button bg-white js-slider1-prev">
              <i className="icon-arrow-left text-20 sm:text-10"></i>
            </button>

            <button className="navRegular__button bg-white js-slider1-next">
              <i className="icon-arrow-right text-20 sm:text-10"></i>
            </button>
          </div>
          <div className="thumbnail">
            <Swiper
              spaceBetween={30}
              className="w-100 overflow-visible mt-30"
              navigation={{
                prevEl: ".js-slider1-prev",
                nextEl: ".js-slider1-next",
              }}
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={5}
              loop
              autoplay
              centeredSlides
              breakpoints={{
                300: {
                  slidesPerView: 2,
                },
                500: {
                  slidesPerView: 3,
                },
                700: {
                  slidesPerView: 5,
                },
              }}
            >
              {videoData.map((elm, i) => (
                <SwiperSlide key={i}>
                  <img src={elm.thumbnail} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
