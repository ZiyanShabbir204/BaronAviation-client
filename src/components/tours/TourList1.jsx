import React, { useState, useEffect, useRef } from "react";
import Sidebar from "./Sidebar";
import { speedFeatures } from "@/data/tourFilteringOptions";
import { tourDataTwo } from "@/data/tours";
import Stars from "../common/Stars";
import Pagination from "../common/Pagination";

import { Link, useNavigate, useParams } from "react-router-dom";

export default function TourList1() {
  const { id } = useParams();
  const [sortOption, setSortOption] = useState("");
  const [ddActives, setDdActives] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false);
  const dropDownContainer = useRef();
  const navigate = useNavigate();
  useEffect(() => {
    const handleClick = (event) => {
      if (
        dropDownContainer.current &&
        !dropDownContainer.current.contains(event.target)
      ) {
        setDdActives(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <>
      <section className="layout-pb-xl layout-pt-xl">
        <div className="container">
          <div className="row">
            <div className="col-xl-auto">
              <div className="row y-gap-30 pt-30">
                {tourDataTwo.slice((id - 1) * 5, id * 5).map((elm, i) => (
                  <div className="col-12" key={i}>
                    <div className="tourCard -type-2">
                      <div className="tourCard__image">
                        <img src={elm.imageSrc} alt="image" />

                        {elm.badgeText && (
                          <div className="tourCard__badge">
                            <div className="button-gradient rounded-12 text-white lh-11 text-13 px-15 py-10">
                              {elm.badgeText}
                            </div>
                          </div>
                        )}

                        {elm.featured && (
                          <div className="tourCard__badge">
                            <div className="bg-accent-2 rounded-12 text-white lh-11 text-13 px-15 py-10">
                              FEATURED
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="tourCard__content">
                        <div className="tourCard__location">
                          <i className="icon-pin"></i> {elm.location}
                        </div>

                        <h3 className="tourCard__title mt-5">
                          <span>{elm.title}</span>
                        </h3>

                        <div className="d-flex items-center mt-5">
                          <div className="d-flex items-center x-gap-5">
                            <Stars star={elm.rating} font={12} />
                          </div>

                          <div className="text-14 ml-10">
                            <span className="fw-500">{elm.rating}</span> (
                            {elm.ratingCount})
                          </div>
                        </div>

                        <p className="tourCard__text mt-5">{elm.description}</p>

                        <div className="row x-gap-20 y-gap-5 pt-30">
                          {elm.features?.map((elm2, i2) => (
                            <div key={i2} className="col-auto">
                              <div className="text-14 text-accent-1">
                                <i className={`${elm2.icon} mr-10`}></i>
                                {elm2.name}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="tourCard__info">
                        <div>
                          <div className="d-flex items-center text-14">
                            <i className="icon-clock mr-10"></i>
                            {elm.duration}
                          </div>

                          <div className="tourCard__price">
                            <div>${elm.fromPrice}</div>

                            <div className="d-flex items-center">
                              From{" "}
                              <span className="text-20 fw-500 ml-5">
                                ${elm.price}
                              </span>
                            </div>
                          </div>
                        </div>

                        <Link
                          // to={`/tour-single-1/${elm.id}`}
                          className="button -sm button-gradient text-white ml-30"
                        >
                          Inquire
                          <i className="icon-arrow-top-right ml-10"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="d-flex justify-center flex-column mt-60">
                <Pagination
                  range={Math.ceil(tourDataTwo.length / 5)}
                  pageNumber={id}
                  onButtonClick={(pageNumber) =>
                    navigate(`/tailored-packages/${pageNumber}`)
                  }
                  onPrevClick={(currentPageNumber) =>
                    navigate(
                      `/tailored-packages/${
                        currentPageNumber > 1
                          ? currentPageNumber - 1
                          : currentPageNumber
                      }`
                    )
                  }
                  onNextClick={(currentPageNumber) =>
                    navigate(
                      `/tailored-packages/${
                        +currentPageNumber === Math.ceil(tourDataTwo.length / 5)
                          ? currentPageNumber
                          : +currentPageNumber + 1
                      }`
                    )
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
