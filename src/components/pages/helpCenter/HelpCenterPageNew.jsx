import FooterTwo from "@/components/layout/footers/FooterTwo";
import Header9 from "@/components/layout/header/Header9";
import React from "react";
import Faq from "./Faq";
import Hero from "./Hero";
import HelpCenterHero from "./HelpCenterHero";
import HelpCenterContent from "./helpCenterContent";
import Locations from "@/components/pages/contact/Locations";

const HelpCenterPageNew = () => {
  return (
    <div>
      <Header9 isSticky />
      <HelpCenterHero />
      <Locations />
      {/* <HelpCenterContent/> */}
      <section className="layout-pb-xl"></section>
      <FooterTwo />
    </div>
  );
};

export default HelpCenterPageNew;
