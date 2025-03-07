import { articles } from "@/data/articles";
import { blogs } from "@/data/blogs";

import { Link } from "react-router-dom";
import React from "react";

export default function ArticlesThree() {
  return (
    <section className="layout-pt-xl layout-pb-xl">
      <div className="container">
        <div className="row justify-between items-end y-gap-10">
          <div className="col-auto">
            <h2
              data-aos="fade-up"
              data-aos-delay=""
              className="text-gradient-vivid-orange "
            >
              LATEST AT THE BARON AVIATION
            </h2>
          </div>

          <div className="col-auto">
            <Link
              data-aos="fade-right"
              data-aos-delay=""
              className="buttonArrow d-flex items-center  "
            >
              <span>See all</span>
              <i className="icon-arrow-top-right text-16 ml-10"></i>
            </Link>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay=""
          className="row y-gap-30 pt-40 sm:pt-20"
        >
          {blogs.slice(0, 3).map((elm, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <Link to="#" className="blogCard -type-1">
                <div className="blogCard__image ratio ratio-41:30">
                  <img
                    src={elm.image}
                    alt="image"
                    className="img-ratio rounded-12"
                  />

                  <div className="blogCard__badge">{elm.badge}</div>
                </div>

                <div className="blogCard__content mt-30">
                  <div className="blogCard__info text-14">
                    <div className="lh-13">{elm.date}</div>
                    <div className="blogCard__line"></div>
                    <div className="lh-13">By {elm.author}</div>
                  </div>

                  <h3 className="blogCard__title text-18 fw-500 mt-10 text-gradient-vivid-orange">
                    {elm.title}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
