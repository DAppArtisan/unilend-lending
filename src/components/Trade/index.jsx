"use client";
import Image from "next/image";
import "./styles/index.scss";
import Binance from "../../../public/assets/binance.svg"
import Uniswap from "../../../public/assets/uniswap.svg";
import { motion } from "framer-motion";
const index = () => (
  <section>
    <div className="container padding-block-100 relative">
      <div className="bg-trade"> </div>
      <h1 className="heading01">
        Trade UFT Token <br />
        <span>On Major Exchanges</span>
      </h1>
      <div className="outer_bx padding-block-500">
        <div className="in_bx">
          <a
            href="https://accounts.binance.com/en/register?ref=CDPSAQU4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={Binance} alt="binance logo" />
          </a>
        </div>
        <div className="in_bx">
          <a
            href="https://app.uniswap.org/#/swap?inputCurrency=0x0202be363b8a4820f3f4de7faf5224ff05943ab1&outputCurrency=ETH"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={Uniswap} alt="uniswap logo" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default index;
