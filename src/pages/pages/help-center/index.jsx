import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import Activity from "@/components/pages/helpCenter/Activity";
import Faq from "@/components/pages/helpCenter/Faq";
import Hero from "@/components/pages/helpCenter/Hero";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
import Header9 from "@/components/layout/header/Header9";

const metadata = {
  title: "Help center || ViaTour - Travel & Tour Reactjs Template",
  description: "ViaTour - Travel & Tour Reactjs Template",
};

export default function HelpCenterPage() {
  return (
    <>
      <main>
        <Header9 isSticky />

        <Hero />
        <Activity />
        {/* <Faq /> */}
        <FooterOne />
      </main>
    </>
  );
}
