import React from "react";
import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import Clock from "../component/Clock";
import FeatureCards from "../component/FeatureCards";

export const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Clock />
      <FeatureCards />
    </>
  );
};

export default LandingPage;