import FooterTwo from "@/components/layout/footers/FooterTwo";
import Header9 from "@/components/layout/header/Header9";
import React from "react";
import Faq from "./Faq";
import Hero from "./Hero";

const FAQPage = () => {
  return (
    <div style={{overflowX:"hidden"}}>
      <Header9 isSticky />
      <Hero />
      <Faq />
      <FooterTwo />
    </div>
  );
};

export default FAQPage;
