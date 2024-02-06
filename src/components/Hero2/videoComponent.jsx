"use client";
import Image from "next/image";
import HeroImage from "../../../public/assets/hero2.png";
import "./styles/index.scss";
// import HeroVideos from "../../../public/assets/hero-video.mp4";
const videoComponent = () => {
  return (
    <div className="hero-section">
       <video
        className="hero-video"
        width={1920}
        height={1000}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src="/assets/Lp(1).mp4" type="video/mp4" />
        <source src="/assets/ip.ogg" type="video/ogg" />
        <Image src="/assets/hero-unilend.png" alt="poster" width={1920} height={1024} />
      </video> 
    
    </div>
  );
};

export default videoComponent;
