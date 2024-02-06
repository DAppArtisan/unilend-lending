"use client";
import "./styles/index.scss";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Video from "./videoComponent";
// import Videos from "../../../public/assets/Ip.mp4"
import { motion } from "framer-motion";
import VideoComponent from "./videoComponent";
import BubbleText from "./BubbleText/BubbleText";
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
    // <section>
    //   <div className="hero-wrapper container3">
    //     <div className="hero-info-container">
    //       <div className="hero-info">
    //         <BubbleText text="Making Every Assets Productive" />

    //         <p className="secondary-heading02">
    //           Multichain permissionless lending & borrowing protocol for ALL
    //           ERC20 tokens.
    //         </p>
    //         {/* <SpotlightButton className="trade-btn" text="Start Trading" /> */}
    //         <Link href="#">
    //           {" "}
    //           <button className="button2">Start Trading</button>
    //         </Link>
    //       </div>
    //     </div>
    //     <div className="bg-image"></div>
    //     <Suspense fallback={<p>Loading video...</p>}>
    //       <Video />
    //     </Suspense>
    //   </div>
    // </section>
<section className="MuiPaper-root-336 jss329 MuiPaper-elevation0-339">
  {/* <video
    muted=""
    loop=""
    className="jss330"
    autoPlay=""
    playsInline=""
    width={1900}
    height={1000}
    poster="../../../public/assets/logo-box.svg"
  >
    <source
      src="../../../public/assets/demo.mp4"
      type="video/mp4"
    />
  </video> */}
  <div className="bg-image"></div>
 <VideoComponent/>
    <div className="hero-info-container wrapper"> 
      <div className="hero-info">
           <BubbleText text="Making Every Assets Productive" />

          <p className="secondary-heading02">
              Multichain permissionless lending & borrowing protocol for ALL
               ERC20 tokens.
            </p>
            <Link href="#">
               {" "}
              <button className="button2">Launch App</button>
            </Link>
         </div>
         </div>
</section>


  );
};

export default hero;
