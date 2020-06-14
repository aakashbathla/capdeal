import React from "react";
import "./App.scss";
import Navigation from "../src/components/molecules/Navigation/Navigation";
import Hero from "../src/components/molecules/Hero/Hero";
import Footer from "../src/components/molecules/Footer/Footer";
import ExploreProperties from "../src/components/molecules/ExploreProperties/ExploreProperties";

function App() {
  return (
    <div>
      <div className="Header-Background">
        <Navigation />
        <Hero />
      </div>
      <ExploreProperties />
      <Footer />
    </div>
  );
}

export default App;
