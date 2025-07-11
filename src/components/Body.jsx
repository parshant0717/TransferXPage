import React from "react";
import About from "./Sub_Components/About";
import Benifit from "./Sub_Components/Benifit";
import Demo from "./Sub_Components/Demo";
import Features from "./Sub_Components/Features";
import Services from "./Sub_Components/Services";
import Social from "./Sub_Components/Social";
import Pricing from "./Sub_Components/Pricing";
import Contact from "./Sub_Components/Contact";

export default function Body() {
  return (
    <div className="max-w-screen-xl mx-auto px-10">
      <About />
      <Benifit />
      <Demo />
      <Features />
      <Services />
      <Social />
      <Pricing />
      <Contact />
    </div>
  );
}
