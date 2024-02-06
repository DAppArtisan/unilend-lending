"use client";
import Image from "next/image";
import "./styles/index.scss";
const videoComponent = () => {
  return (
   <>
   <video
        className="jss330"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src="/assets/Lp.mp4" type="video/mp4" />
        <source src="/assets/ip.ogg" type="video/ogg" />
        <Image src="/assets/hero-unilend.png" alt="poster" width={100} height={100}/>
      </video> 
      </>
  );
};

export default videoComponent;
