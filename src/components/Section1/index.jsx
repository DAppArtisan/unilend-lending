"use client";
import Image from "next/image";
import Link from "next/link";
import "./styles/index.scss";
import Image1 from "../../../public/assets/box_gif.gif";
import Icon1 from "../../../public/assets/icon1.svg";
import Icon2 from "../../../public/assets/icon2.svg";
import Icon3 from "../../../public/assets/icon3.svg";
import RedGradient from "../../../public/assets/red.svg";
// import SpotlightButton from "./SpotlightButton/SpotlightButton";
import { motion } from "framer-motion";
const index = () => (
  <section className="section1 padding-block-900">
    <div className="container">
      <div className="even-colums">
        <motion.div
          initial={{ opacity: 0.3, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.8 }}
          className=""
        >
          <h2 className="heading02">Permission less Listing</h2>
          <p className="secondary-heading02">
            Any ERC20 token will be able to list without any entity controlling
            the listing process, making UniLend’s lending and borrowing
            functionalit accessible to every token.
          </p>
          <div className="in-bx">
            <div className="flex inn-bx">
              <Image width={32} height={32} src={Icon1} alt="icon1" />
              <p className="paragraph01">
                Start lending & borrowing more than 9000+ assets
              </p>
            </div>
            <div className="flex inn-bx">
              <Image width={32} height={32} src={Icon2} alt="icon2" />
              <p className="paragraph01">
                Create a Dual Asset Pool to enable Permissionless Lending and
                Borrowing for any asset pair.
              </p>
            </div>
            <div className="flex inn-bx">
              <Image width={32} height={32} src={Icon3} alt="icon3" />
              <p className="paragraph01">
                Providing flexibility to lenders to choose the assets against
                which they wish to lend by selecting a corresponding pool
              </p>
            </div>
          </div>

          <a href="https://bit.ly/3FCj5Bn" target="_blank">
            {" "}
            <button className="button2"> Know More</button>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.3, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.8 }}
          className="boxx gradient"
        >
          {/* <Image className="gradient"  src={RedGradient} alt="gradient"/> */}
          <Image className="mainImage" src={Image1} alt="permissionless" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default index;
