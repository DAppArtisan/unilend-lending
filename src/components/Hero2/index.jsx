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
            <motion.div  initial={{ opacity: 0.3, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.8 }}>
            <BubbleText text="Making Every Assets Productive" />
            </motion.div>
          

            <motion.p  initial={{ opacity: 0.3, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.8 }} className="secondary-heading02">
              Multichain permissionless lending & borrowing protocol for ALL
              ERC20 tokens.
            </motion.p>
            {/* <SpotlightButton className="trade-btn" text="Start Trading" /> */}
            <motion.button className="button2">Start Trading</motion.button>
          </div>
        </div>
      <div className="bg-image"></div>
     
        <Video />
    
      </div>
    </section>
  );
};

export default hero;
