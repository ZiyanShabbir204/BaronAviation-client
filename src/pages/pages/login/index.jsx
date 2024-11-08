import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import Login from "@/components/pages/Login";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
import Header3 from "@/components/layout/header/Header3";

const metadata = {
  title: "Login || ViaTour - Travel & Tour Reactjs Template",
  description: "ViaTour - Travel & Tour Reactjs Template",
};

export default function LoginPage() {
  return (
    <>
      {/*  */}
      <main>
        <Header3 />
        <Login />
        <FooterOne />
      </main>
    </>
  );
}
