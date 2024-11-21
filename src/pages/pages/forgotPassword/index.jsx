import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
import Header3 from "@/components/layout/header/Header3";
import Header9 from "@/components/layout/header/Header9";
import FooterTwo from "@/components/layout/footers/FooterTwo";
import ForgotPassword from  "@/components/pages/ForgotPassword"

const metadata = {
  title: "Login || ViaTour - Travel & Tour Reactjs Template",
  description: "ViaTour - Travel & Tour Reactjs Template",
};

export default function ForgotPasswordPage() {
  return (
    <>
      {/*  */}
      <main>
        <Header9 />
        <ForgotPassword/>
        <FooterTwo />
      </main>
    </>
  );
}
