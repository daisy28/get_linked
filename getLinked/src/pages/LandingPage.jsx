// import React from "react";
import LandingPageNav from "../components/LandingPageNav";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Rules from "../components/Rules";
import KeyAttributes from "../components/KeyAttributes";

const LandingPage = () => {
     return (
          <section className={``}>
               <LandingPageNav />
               <Hero />
               <Intro />
               <Rules />
               <KeyAttributes />
          </section>
     )
}

export default LandingPage;