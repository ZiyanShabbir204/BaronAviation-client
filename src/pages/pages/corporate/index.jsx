import BannerOne from "@/components/homes/banners/BannerOne";
import BrandsOne from "@/components/homes/brands/BrandsOne";
import FeaturesOne from "@/components/homes/features/FeaturesOne";
import FeturesTwo from "@/components/homes/features/FeturesTwo";
import TestimonialOne from "@/components/homes/testimonials/TestimonialOne";
import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import Banner from "@/components/pages/about/Banner";
import Hero from "@/components/pages/corporate/Hero";
import Information from "@/components/pages/corporate/Information";
import Team from "@/components/pages/about/Team";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
import Header9 from "@/components/layout/header/Header9";
import BannerTwo from "@/components/homes/banners/BannerTwo";
import TourTypeOne from "@/components/homes/tourTypes/TourTypeOne";
import BrandsTwo from "@/components/homes/brands/BrandsTwo";
import FooterTwo from "@/components/layout/footers/FooterTwo";
import Banner13 from "@/components/homes/banners/Banner13";
import ArticlesThree from "@/components/homes/articles/ArticlesThree";
import CorporateSlider from "@/components/corporateSlider/CorporateSlider";

const metadata = {
  title: "About || ViaTour - Travel & Tour Reactjs Template",
  description: "ViaTour - Travel & Tour Reactjs Template",
};

export default function Corporate() {
  return (
    <>
      <main>
        <Header9 isSticky />
        <Hero />
        <Information />
        <BrandsTwo />
        <CorporateSlider />

        <Banner13 />

        <ArticlesThree />
        <FooterTwo />
      </main>
    </>
  );
}
