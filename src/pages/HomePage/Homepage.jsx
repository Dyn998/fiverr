import React from "react";
import Hero from "./Hero";
import TrustedBy from "./TrustedBy";
import Services from "./Services";
import Features from "./Features";
import Testimonial from "./Testimonial";
import Marketplace from "./Marketplace";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <TrustedBy />
      <Services />
      <Features />
      <Testimonial />
      <Marketplace />
    </div>
  );
};

export default HomePage;
