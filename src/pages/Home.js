import React from "react";
import CeoQoute from "../components/Home/CeoQoute/CeoQoute";
import OwnDevice from "../components/Home/EveryoneOnTheirOwnDevice/OwnDevice";
import Footer from "../components/Home/Footer/Footer";
import HeroSection from "../components/Home/HeroSection/HeroSection";
import Partners from "../components/Home/Partners/Partners";
import SetupConference from "../components/Home/SetupConference/SetupConference";
import VritualConferencing from "../components/Home/VirtualConferencing/VirtualConferencing";
import VideoCallAndSecureConference from "../components/Home/VideoCallAndSecureConference/VideoCallsAndSecureConference";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Partners />
      <OwnDevice />
      <VritualConferencing />
      <VideoCallAndSecureConference />
      <CeoQoute />
      <SetupConference />
      <Footer />
    </div>
  );
};

export default Home;
