import ArticlesOne from "@/components/homes/articles/ArticlesOne";
import Banner14 from "@/components/homes/banners/Banner14";
import Banner15 from "@/components/homes/banners/Banner15";
import TrendingDestinations4 from "@/components/homes/destinations/TrendingDestinations4";
import Features10 from "@/components/homes/features/Features10";
import Features11 from "@/components/homes/features/Features11";
import Features8 from "@/components/homes/features/Features8";
import Features9 from "@/components/homes/features/Features9";
import Hero10 from "@/components/homes/heros/Hero10";
import TestimonialsSix from "@/components/homes/testimonials/TestimonialsSix";
import Tour2 from "@/components/homes/tours/Tour2";
import FooterFour from "@/components/layout/footers/FooterFour";
import Header9 from "@/components/layout/header/Header9";
import React, { useEffect } from "react";

import MetaComponent from "@/components/common/MetaComponent";
import BrandsTwo from "@/components/homes/brands/BrandsTwo";
import About from "@/components/about/About";
import FlightRequestMenu from "@/components/flightRequest/FlightRequestMenu";
import Tour1 from "@/components/homes/tours/Tour1";
import FeaturesOne from "@/components/homes/features/FeaturesOne";
import OfferServices from "@/components/offerServices/OfferServices";
import Banner from "@/components/homes/banners/Banner";
import TrendingDestinations3 from "@/components/homes/destinations/TrendingDestinations3";
import FooterTwo from "@/components/layout/footers/FooterTwo";
import YoutubeVideo from "@/components/youtubeVideo/YoutubeVideo";
import YoutubeVideos from "@/components/youtubeVideos/YoutubeVideos";
import Features5 from "@/components/homes/features/Features5";
import FeturesTwo from "@/components/homes/features/FeturesTwo";
import BannerTwo from "@/components/homes/banners/BannerTwo";
import BannerHome from "@/components/homes/banners/BannerHome";
import ArticlesThree from "@/components/homes/articles/ArticlesThree";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

const metadata = {
  title: "Home-1 || ViaTour - Travel & Tour Reactjs Template",
  description: "ViaTour - Travel & Tour Reactjs Template",
};

export default function HomePage10() {
     const location = useLocation();

  const scrollToBookNow = () => {
    scroller.scrollTo("bookNow", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -window.innerHeight / 3, // Adjusts the offset to center
    });
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("bookNow") === "true") {
      scrollToBookNow();
    }
  }, [location.search]);
  return (
    <>
      <main>
        <Header9 />
        <Hero10 />
        <FlightRequestMenu />
        {/* <BrandsTwo /> */}
        <FeturesTwo />
        <FeaturesOne />
        <Banner />
        <OfferServices />
        <TrendingDestinations3 />
        <ArticlesThree />
        <YoutubeVideos />
        <BannerHome />
        <TestimonialsSix />
        <FooterTwo />
      </main>
    </>
  );
}
