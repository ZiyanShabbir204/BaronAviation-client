import BannerOne from "@/components/homes/banners/BannerOne";
import BrandsOne from "@/components/homes/brands/BrandsOne";
import FeaturesOne from "@/components/homes/features/FeaturesOne";
import FeturesTwo from "@/components/homes/features/FeturesTwo";
import TestimonialOne from "@/components/homes/testimonials/TestimonialOne";
import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import Banner from "@/components/pages/about/Banner";
import Hero from "@/components/pages/about/Hero";
import Information from "@/components/pages/about/Information";
import Team from "@/components/pages/about/Team";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
import Header9 from "@/components/layout/header/Header9";
import BannerTwo from "@/components/homes/banners/BannerTwo";
import TourTypeOne from "@/components/homes/tourTypes/TourTypeOne";
import BrandsTwo from "@/components/homes/brands/BrandsTwo";
import FooterTwo from "@/components/layout/footers/FooterTwo";
import TestimonialsSix from "@/components/homes/testimonials/TestimonialsSix";

const metadata = {
  title: "About || ViaTour - Travel & Tour Reactjs Template",
  description: "ViaTour - Travel & Tour Reactjs Template",
};

export default function AboutPage() {
  return (
    <>
      <main>
        <Header9 isSticky />
        <Hero />
        <Information />
        <Banner />
        <FeaturesOne />
        <BannerTwo />
        <TourTypeOne />
        <BrandsTwo />
        <br />
        <TestimonialsSix />
        <FooterTwo />
      </main>
    </>
  );
}
