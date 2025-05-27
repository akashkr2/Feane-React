import React from "react";
import SlidingCarouselAd from "../components/SlidingCarouselAd";
import OfferCards from "../components/OfferCards";
import Menu from "../components/Menu";
import MenuAnimated from "../components/MenuAnimated";
import AboutUs from "../components/AboutUs";
import BookATable from "../components/BookATable";
import CarouselImplementation from "../components/carousel/CarouselImplementation";

const Home = () => {
  return (
    <>
      <div>
        <div className="w-full h-[90vh] md:h-[85vh] flex items-start justify-center relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <img
              src="/images/bg/hero-bg2.jpg"
              alt="bg-hero"
              className="object-cover"
            />
          </div>
          <SlidingCarouselAd />
        </div>
        <div className="bg-white px-25">
          <OfferCards />
          {/* <Menu /> */}
          <MenuAnimated />
        </div>
        <AboutUs />
        <div className="bg-white px-25">
          <BookATable />
          <CarouselImplementation />
        </div>
      </div>
    </>
  );
};

export default Home;
