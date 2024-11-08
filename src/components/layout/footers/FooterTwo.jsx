import React from "react";
import Paymentcards from "../components/Paymentcards";
import FooterLinks from "../components/FooterLinks";
import Socials from "../components/Socials";

export default function FooterTwo() {
  return (
    <footer className="footer -type-1 -dark background-dark-gray text-white">
      <div className="footer__main">
        <div className="footer__bg"></div>

        <div className="container">
          <div className="footer__info">
            <div className="row y-gap-20 justify-between">
              <div className="col-auto">
                <div className="row y-gap-20 items-center">
                  <div className="col-auto">
                    <i className="icon-headphone text-50  hero-heading"></i>
                  </div>

                  <div className="col-auto">
                    <div className="text-20 fw-500  hero-heading">
                      Speak to our expert at{" "}
                      <span className="text-gradient-vivid-orange">
                        0-000-000-0000
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-auto">
                <div className="footerSocials">
                  <div className="footerSocials__title  hero-heading">
                    Follow Us
                  </div>

                  <div className="footerSocials__icons">
                    <Socials />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer__content">
            <div className="row y-gap-40 justify-between">
              <div className="col-lg-4 col-md-6">
                <h4 className="text-20 fw-500 text-gradient-vivid-orange">
                  Contact
                </h4>

                <div className="y-gap-10 mt-20">
                  <a className="d-block" href="#">
                    Plot 10, Interactive Plaza, E-11/13, Islamabad, Pakistan
                  </a>
                  <a className="d-block" href="#">
                    sales@baronaviation.com
                  </a>
                </div>
              </div>

              <FooterLinks />

              <div className="col-lg-3 col-md-6">
                <h4 className="text-20 fw-500 text-gradient-vivid-orange">
                  Newsletter
                </h4>
                <p className="mt-20">
                  Subscribe to the free newsletter and stay up to date
                </p>

                <div className="footer__newsletter">
                  <input type="Email" placeholder="Your email address" />
                  <button>Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer__bottom">
          <div className="row y-gap-5 justify-between items-center">
            <div className="col-auto">
              <div className="text-gradient-vivid-orange">
                © COPYRIGHT THE BARON AVIATION {new Date().getFullYear()}
              </div>
            </div>

            <div className="col-auto">
              <div className="footer__images d-flex items-center x-gap-10">
                <Paymentcards />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
