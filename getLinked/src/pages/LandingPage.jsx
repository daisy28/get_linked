// import React from "react";
import LandingPageNav from "../components/LandingPageNav";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Rules from "../components/Rules";

const LandingPage = () => {
     return (
          <section className={``}>
               <LandingPageNav />
               <Hero />
               <Intro />
               <Rules />
          </section>
     )
}

export default LandingPage;