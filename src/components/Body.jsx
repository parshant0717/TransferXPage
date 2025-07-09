import React from "react";
import About from "./Sub_Components/About";
import Benifit from "./Sub_Components/Benifit";

export default function Body() {
  return (
    <div className="max-w-screen-xl mx-auto px-10">
      <About />
      <Benifit />
    </div>
  );
}
