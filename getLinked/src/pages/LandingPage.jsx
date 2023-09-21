// import React from "react";
import LandingPageNav from "../components/LandingPageNav";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Rules from "../components/Rules";
import KeyAttributes from "../components/KeyAttributes";
import Faqs from "../components/Faqs";
import Timeline from "../components/Timeline";
import Prizes from "../components/Prizes";

const LandingPage = () => {
  return (
    <section className={``}>
      <LandingPageNav />
      <Hero />
      <Intro />
      <Rules />
      <KeyAttributes />
      <Faqs />
      <Timeline />
      <Prizes />
    </section>
  );
};

export default LandingPage;
