import React from "react";
import Hero from "./Hero";
import MeetPastors from "./Meet_Pastors";
import Events from "./Events";
import Location from "./Location";
import Giving from "./Giving";
import ScrollToTop from "./ScrollToTop";

export const Home = () => {
  return (
    <div>
      <Hero />
      <ScrollToTop />
      <div className="content-container ">
        <MeetPastors />
        <Location />
        <Events />
        <Giving />
      </div>
    </div>
  );
};
