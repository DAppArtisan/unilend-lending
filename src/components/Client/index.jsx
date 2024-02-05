"use client";
import "./styles/index.scss";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import {
  Ankr,
  Bitthumb,
  Bzx,
  Coin98,
  Fantom,
  Injective,
  Kucoin,
  Mirror,
  Mxc,
  Paraswap,
  Plutos,
  Polygon,
  Probit,
  Starfi,
  Union,
  Unore,
  Yop,
  Zeroswap,
} from "../../../public/assets/client";

const index = () => {
  return (
    <section className="padding-block-700">
      <div className="container2">
        <motion.div
          initial={{ opacity: 0.5, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.8 }}
          className="info-container"
        >
          <h2 className="heading01">Our Partners</h2>
        </motion.div>
        <div className="main-bx padding-block-400">
          <Marquee
            direction="left"
         
          >
            <div className="inn-bx">
              <Image src={Injective} alt="injective logo" />
            </div>
            <div className="inn-bx">
              <Image src={Mxc} alt="mxc logo"/>
            </div>
            <div className="inn-bx">
              <Image src={Polygon} alt="polygon logo" />
            </div>
            <div className="inn-bx">
              <Image src={Probit} alt="probit" />
            </div>
            <div className="inn-bx">
              <Image src={Bitthumb} alt="bitthumb"/>
            </div>
            <div className="inn-bx">
              <Image src={Bzx} alt="bzx"/>
            </div>
          </Marquee>
          <Marquee
            direction="right"
          >
            <div className="inn-bx">
              <Image src={Zeroswap} alt="zeroswap logo" />
            </div>
            <div className="inn-bx">
              <Image src={Union} alt="union logo" />
            </div>
            <div className="inn-bx">
              <Image src={Kucoin} alt="kuccoin logo" />
            </div>
            <div className="inn-bx">
              <Image src={Coin98} alt="coin98 logo" />
            </div>
            <div className="inn-bx">
              <Image src={Ankr} alt="ankr logo" />
            </div>
            <div className="inn-bx">
              <Image src={Starfi} alt="Starfi logo" />
            </div>
          </Marquee>
          <Marquee
            direction="left"
          >
            <div className="inn-bx">
              <Image src={Unore} alt="Unore logo" />
            </div>
            <div className="inn-bx">
              <Image src={Paraswap} alt="Paraswap logo" />
            </div>
            <div className="inn-bx">
              <Image src={Fantom} alt="fantom logo" />
            </div>
            <div className="inn-bx">
              <Image src={Yop} alt="Yop logo" />
            </div>
            <div className="inn-bx">
              <Image src={Mirror} alt="Mirror logo" />
            </div>
            <div className="inn-bx">
              <Image src={Plutos} alt="Plutos logo" />
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default index;
