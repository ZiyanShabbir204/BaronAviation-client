import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import ContactForm from "@/components/pages/inquire/ContactForm";
import Locations from "@/components/pages/contact/Locations";
import Map from "@/components/pages/contact/Map";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
import FooterTwo from "@/components/layout/footers/FooterTwo";
import Header9 from "@/components/layout/header/Header9";

const metadata = {
  title: "Contact || ViaTour - Travel & Tour Reactjs Template",
  description: "ViaTour - Travel & Tour Reactjs Template",
};

export default function Inquire() {
  return (
    <>
      <main>
        <Header9 isSticky />
        <ContactForm />
        <FooterTwo />
      </main>
    </>
  );
}
