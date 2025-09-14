import FooterTwo from "@/components/layout/footers/FooterTwo";
import Header9 from "@/components/layout/header/Header9";
import React from "react";
import Faq from "./Faq";
import Hero from "./Hero";
import HelpCenterHero from "./HelpCenterHero";
import HelpCenterContent from "./helpCenterContent";

const HelpCenterPageNew = () => {
  return (
    <div>
      <Header9 isSticky />
      <HelpCenterHero/>
      <HelpCenterContent/>
      <FooterTwo />
    </div>
  );
};

export default HelpCenterPageNew;
