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
        height={1024}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src="/assets/hero-video.mp4" type="video/mp4" />
        <Image src="/assets/hero-unilend.png" alt="poster" width={100} height={100} />
      </video>
     
    </div>
  );
};

export default videoComponent;
