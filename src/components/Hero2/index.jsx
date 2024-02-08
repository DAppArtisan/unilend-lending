"use client";
import "./styles/index.scss";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Heroimage from "../../..//public/assets/hero-unilend.png"
const BubbleText = ({ text }) => {
  return (
    <motion.h1
      initial={{ opacity: 0.1, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      className="heading04"
    >
      {text.split("").map((child, idx) => (
        <span className="bold" key={idx}>
          {child}
        </span>
      ))}
    </motion.h1>
  );
};

const hero = () => {
  return (
    <section className=" jss329 MuiPaper-elevation0-339">
      <div className="bg-image"></div>
      <motion.video
        initial={{ opacity: 0.1 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="jss330"
        poster={Heroimage}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src="/assets/hero-v.mp4" type="video/mp4" />
        <source src="/assets/lp.ogg" type="video/ogg" />
        <Image
          src="/assets/hero-unilend.png"
          alt="poster"
          width={1900}
          height={1024}
        />
      </motion.video>
      <div className="hero-info-container wrapper">
        <div className="hero-info">
          <BubbleText text="Making Every Assets Productive" />

          <motion.p
            initial={{ opacity: 0.1, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.9 }}
            className="secondary-heading02"
          >
            Multichain permissionless lending & borrowing protocol for ALL ERC20
            tokens.
          </motion.p>
          <motion.a
            initial={{ opacity: 0.1, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            href="https://testnet.unilend.finance"
            target="_blank"
          >
            {" "}
            <button className="button2">Launch App</button>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default hero;
