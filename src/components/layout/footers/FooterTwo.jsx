import React from "react";
import Paymentcards from "../components/Paymentcards";
import FooterLinks from "../components/FooterLinks";
import Socials from "../components/Socials";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import RingVolumeIcon from "@mui/icons-material/RingVolume";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import { Stack } from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
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
                      Speak to our flight team 24/7{" "}
                      <span className="text-gradient-vivid-orange">
                        +92-326-0000227
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

                <Stack gap={1} maxWidth="300px">
                  <div className="d-block">
                    <LocationCityIcon
                      className="path-color-yellow"
                      sx={{
                        marginRight: 1,
                      }}
                    />
                    3rd Floor, Interactive Plaza, Sector E-11/3 Markaz,
                    Islamabad
                  </div>
                  <a className="d-block" href="#">
                    <AlternateEmailIcon
                      className="path-color-yellow"
                      sx={{
                        marginRight: 1,
                      }}
                    />
                    support@thebaronaviation.com
                  </a>
                  <a className="d-block" href="#">
                    <AlternateEmailIcon
                      className="path-color-yellow"
                      sx={{
                        marginRight: 1,
                      }}
                    />
                    inquire@baronaviation.com
                  </a>

                  <div>
                    <CallOutlinedIcon
                      sx={{
                        marginRight: 1,
                      }}
                      className="path-color-yellow"
                    />
                    +92 326 0000121
                  </div>
                  <div>
                    <RingVolumeIcon
                      sx={{
                        marginRight: 1,
                      }}
                      className="path-color-yellow"
                    />
                    +92 51 6110971
                  </div>
                </Stack>
              </div>

              <FooterLinks />
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
