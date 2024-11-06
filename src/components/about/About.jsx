import "./about.css";
export default function About() {
  return (
    <section className="layout-pt-xl layout-pb-xl">
      <div className="container about-grid-container">
        <div class="item image-perk image-section">
          <img className="first-image" src="/img/helicopter/heli-5.jpeg" />
          <div className="travel-partner-container">
            <h1 className="travel-partner-number">O1</h1>
            <div className="travel-partner-text">
              <p>Luxury</p>
              <p>Travel Partner </p>
            </div>
          </div>
        </div>
        <div class="item image-section">
          <img className="second-image" src="/img/helicopter/heli-1.jpeg" />
        </div>
        <div class="item about-text">
          <div className="tag"> TOP CHOICE</div>
          <h1 className="about-text-heading">
            IN EXCLUSIVE CORPORATE AIR TRAVEL, POWERED BY{" "}
            <span className="text-vivid-orange">BARON</span>
          </h1>
          <p className="about-text-para">
            At Baron Aviation, we provide{" "}
            <span className="text-vivid-orange">
              {" "}
              exquisite helicopter travel{" "}
            </span>
            that combines unparalleled luxury, time efficiency, and unwavering
            safety. Our service ensures punctuality, allowing you to arrive on
            time for important business meetings. With Baron, enjoy seamless,
            comfortable journeys where your time, comfort, and security are our
            top priorities.
          </p>
        </div>
        <div class="item about-extra-text">
          <ul className="bullet-points">
            <li>Book by appointment only</li>
            <li>Pay with Convenience</li>
            <li>Smooth Rides in Top-of-the-line helicopter </li>
            <li>Free Consultation </li>
            <li>Customize Travel Plan @ xxxx- xxx - x</li>
          </ul>
        </div>
        <div class="item about-extra-text">
          <div className="perk-container">
            <h2 style={{ marginBottom: "10px" }}>The Prestige Perk</h2>
            <ul>
              <li>Avail 10% off all corporate travels until 31st Dec 2024.</li>
              <li>
                Use Code “Baron05” when booking 5 seats to avail a $250
                discount.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
