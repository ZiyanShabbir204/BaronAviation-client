import { faqData } from "@/data/tourSingleContent";
import React, { useState } from "react";
import Hero from "./Hero";


export default function TermsAndConditionContent() {
  const [currentActiveFaq, setCurrentActiveFaq] = useState(0);
  return (
    <section className="layout-pt-xl layout-pb-xl">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <h2 className="text-30 md:text-24">Terms and Conditions</h2>
          </div>
        </div>

      </div>
    </section>
  );
}
