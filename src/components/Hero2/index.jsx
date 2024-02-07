"use client";
import "./styles/index.scss";
import Image from "next/image";
import Link from "next/link";

const BubbleText = ({text}) => {
  return (
    <h1 className="heading04">
      {text.split("").map((child, idx) => (
        <span className="bold" key={idx}>
          {child}
        </span>
      ))}
    </h1>
  );
};

const hero = () => {
  return (
   
<section className=" jss329 MuiPaper-elevation0-339">
  <div className="bg-image"></div>
  <video
        className="jss330"
      
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src="/assets/hero-v.mp4" type="video/mp4" />
        <source src="/assets/lp.ogg" type="video/ogg" />
        <Image src="/assets/hero-unilend.png" alt="poster" width={100} height={100}/>
      </video> 
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
