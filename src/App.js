import React from "react";
import "./App.scss";
import Navigation from "../src/components/molecules/Navigation/Navigation";
import Hero from "../src/components/molecules/Hero/Hero";
import Footer from "../src/components/molecules/Footer/Footer";
import About from "../src/components/molecules/About/About";
import ExploreProperties from "../src/components/molecules/ExploreProperties/ExploreProperties";
import ResaleProperties from "../src/components/molecules/ResalePropoerties/ResaleProperties";
import FeaturedProperties from "../src/components/molecules/FeaturedProperty/FeaturedProperty";
import PropertyType from "../src/components/molecules/PropertyType/PropertyType";
function App() {
  return (
    <div>
      <div className="Header-Background">
        <Navigation />
        <Hero />
      </div>
      <PropertyType />
      <About />
      <FeaturedProperties />
      <ExploreProperties />
      <ResaleProperties />
      <Footer />
    </div>
  );
}

export default App;
