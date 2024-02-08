"use client";
import "./styles/index.scss";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import {
  Base,
  Bluzelle,
  Coindcx,
  Cryptolocally,
  Wazirx,
  Umbrella,
  Risk,
  Tidal,
  Redkite,
  Qi,
  Poolz,
  Polka,
  Playcent,
  Oddz,
  Nord,
  Genesis,
  Espn,
  Division,
  Dfyn,
  Cryberfi,
  Ankr,
  Bzx,
  Coin98,
  Fantom,
  Injective,
  Kucoin,
  Mirror,
  Mxc,
  Paraswap,
  Polygon,
  Probit,
  Union,
  Yop,
  Zeroswap
} from "../../../public/assets/clients";

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
              <Image src={Bzx} alt="bzx"/>
            </div>
            <div className="inn-bx">
              <Image src={Base} alt="Base logo" />
            </div>
            <div className="inn-bx">
              <Image src={Bluzelle} alt="Bluzelle logo"/>
            </div>
            <div className="inn-bx">
              <Image src={Coindcx} alt="Coindcx logo" />
            </div>
            <div className="inn-bx">
              <Image src={Cryptolocally} alt="Cryptolocally" />
            </div>
            <div className="inn-bx">
              <Image src={Wazirx} alt="Wazirx"/>
            </div>
            <div className="inn-bx">
              <Image src={Umbrella} alt="bzx"/>
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
              <Image src={Risk} alt="Risk logo" />
            </div>
            <div className="inn-bx">
              <Image src={Tidal} alt="Tidal logo" />
            </div>
            <div className="inn-bx">
              <Image src={Redkite} alt="Redkite logo" />
            </div>
            <div className="inn-bx">
              <Image src={Qi} alt="Qi logo" />
            </div>
            <div className="inn-bx">
              <Image src={Poolz} alt="Poolz logo" />
            </div>
            <div className="inn-bx">
              <Image src={Polka} alt="Polka logo" />
            </div>
            <div className="inn-bx">
              <Image src={Playcent} alt="Playcent logo" />
            </div>
          </Marquee>
          <Marquee
            direction="left"
          >
         
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
              <Image src={Oddz} alt="Oddz logo" />
            </div>
            <div className="inn-bx">
              <Image src={Nord} alt="Nord logo" />
            </div>
            <div className="inn-bx">
              <Image src={Genesis} alt="Genesis logo" />
            </div>
            <div className="inn-bx">
              <Image src={Espn} alt="Espn logo" />
            </div>
            <div className="inn-bx">
              <Image src={Division} alt="Division logo" />
            </div>
            <div className="inn-bx">
              <Image src={Dfyn} alt="Dfyn logo" />
            </div>
            <div className="inn-bx">
              <Image src={Cryberfi} alt="Dfyn logo" />
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default index;
