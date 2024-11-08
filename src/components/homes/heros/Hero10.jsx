import FlightRequestMenu from "@/components/flightRequest/FlightRequestMenu";
import { Link, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

const tags = [
  {
    id: 1,
    iconClass: "icon-bank text-26",
    label: "Culture",
  },
  {
    id: 2,
    iconClass: "icon-menu-3 text-26",
    label: "Food",
  },
  {
    id: 3,
    iconClass: "icon-mountain text-26",
    label: "Nature",
  },
  {
    id: 4,
    iconClass: "icon-hot-air-balloon-2 text-26",
    label: "Adventure",
  },
];
export default function Hero10() {
  const navigate = useNavigate();
  const scrollToBookNow = () => {
    scroller.scrollTo("bookNow", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -window.innerHeight / 3, // Adjusts the offset to center
    });
  };

  return (
    <section
      className="hero -type-10"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div className="hero__bg">
        {/* <img src="/img/hero/10/1.jpg" alt="background" /> */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1, // Place behind other elements
          }}
        >
          <source src="/video/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.3)", // 10% black overlay
            zIndex: -1,
          }}
        ></div>
      </div>

      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-xl-9 col-lg-10">
            <div className="hero__content">
              <div
                data-aos="fade-up"
                data-aos-delay="250"
                className="hero__text text-white text-rajdhani"
              >
                READY TO FLY LUXURY?
              </div>
              <h1
                data-aos="fade-up"
                data-aos-delay="100"
                className="hero__title text-white hero-heading"
                style={{
                  fontSize: "60px",
                }}
              >
                WHERE PRESTIGE TAKES FLIGHT
              </h1>

              <div
                data-aos="fade-up"
                data-aos-delay="250"
                className="hero__text text-white text-rajdhani"
              >
                Travel in Executive Luxury with Baron
              </div>

              <button
                data-aos="fade-up"
                data-aos-delay="250"
                className="button -md  button-gradient text-white fly-btn"
                to="bookNow"
                onClick={scrollToBookNow}
              >
                LET'S FLY
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
