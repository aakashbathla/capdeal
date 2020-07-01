import React from "react";
import "App.scss";
import Navigation from "components/molecules/Navigation/Navigation";
import Hero from "components/molecules/Hero/Hero";
import Footer from "components/molecules/Footer/Footer";
import About from "components/molecules/About/About";
import ExploreProperties from "components/molecules/ExploreProperties/ExploreProperties";
import ResaleProperties from "components/molecules/ResalePropoerties/ResaleProperties";
import FeaturedProperties from "components/molecules/FeaturedProperty/FeaturedProperty";
//import PropertyType from "components/molecules/PropertyType/PropertyType";
// import Advertise from "components/molecules/Advertise/Advertise";
import AdvertiseProperty from "components/molecules/AdvertisedProperty/AdvertisedProperty";
import Features from "components/molecules/Features/Features";
import SearchBox from "components/molecules/SearchBox/SearchBox";

const Home = () => {
  return (
    <div>
      <div className="Header-Background">
        <Navigation />
        <Hero />
        <SearchBox />
      </div>
      <Features />
      <About />
      <AdvertiseProperty />
      {/* <Advertise /> */}
      <FeaturedProperties />
      <ExploreProperties />
      <ResaleProperties />
      <Footer />
    </div>
  );
};

export default Home;
