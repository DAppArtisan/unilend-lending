"use client";
import "./styles/index.scss";
import Image from "next/image";
import { Suspense } from "react";
import Video from "./videoComponent";
import Link from "next/link";
import { motion } from "framer-motion";
// import SpotlightButton from "../Section1/SpotlightButton/SpotlightButton";
import BubbleText from "./bubbleText/bubbleText";
const hero = () => {
  // const imageVariants = {
  //   hidden: { opacity: 0 },
  //   visible: { opacity: 1 },
  // };

  // const containerVariants = {
  //   visible: {
  //     transition: {
  //       staggerChildren: 0.5, // Adjust the delay between each image
  //     },
  //   },
  // };

  return (
    <section>
      <div className="hero-wrapper container3">
        <div className="hero-info-container">
          <div className="hero-info">
            <BubbleText text="Making Every Assets Productive" />

            <p className="secondary-heading02">
              Multichain permissionless lending & borrowing protocol for ALL
              ERC20 tokens.
            </p>
            {/* <SpotlightButton className="trade-btn" text="Start Trading" /> */}
            <button className="button2">Start Trading</button>
          </div>
        </div>
      <div className="bg-image"></div>
     
        <Video />
    
      </div>
    </section>
  );
};

export default hero;
