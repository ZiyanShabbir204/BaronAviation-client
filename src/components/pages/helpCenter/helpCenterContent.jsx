import { faqData } from "@/data/tourSingleContent";
import React, { useState } from "react";
import Hero from "./Hero";
import Locations from "@/components/pages/contact/Locations";

export default function HelpCenterContent() {
  const [currentActiveFaq, setCurrentActiveFaq] = useState(0);
  return (
    <section className="layout-pt-xl layout-pb-xl">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <Locations />
          </div>
        </div>
      </div>
    </section>
  );
}
