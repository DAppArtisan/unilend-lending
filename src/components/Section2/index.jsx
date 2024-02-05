"use client";
import Image from "next/image";
import "./styles/index.scss";
import Image1 from "../../../public/assets/box_gif.gif";
import Icon1 from "../../../public/assets/p1.svg";
import Icon2 from "../../../public/assets/p2.svg";
import Icon3 from "../../../public/assets/p3.svg";
import { Isolated } from "../../../public/assets";

import { motion } from "framer-motion";
const index = () => {
  return (
    <section className="padding-block-900 section2">
      <div className="container">
        <div className="even-colums">
          <motion.div
            initial={{ opacity: 0.3, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            className="boxx gradient col1"
          >
            <Image className="mainImage" src={Isolated} alt="Isolated Image" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0.3, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            className=" col2"
          >
            <h1 className="heading02">Isolated Dual Asset Pool </h1>
            <p className="secondary-heading02">
              Any user can create any ERC20/ERC20 pool to begin lending and
              borrowing for those assets, thereby making every digital asset
              productive.
            </p>
            <div className="in-bx">
              <div className="flex inn-bx">
                <Image
                  style={{ color: "#000" }}
                  width={32}
                  height={32}
                  src={Icon1}
                  alt="icon1"
                />
                <p className="paragraph01">
                  Every asset pair exists as an independent pool and has no
                  cross-collateralization.
                </p>
              </div>
              <div className="flex inn-bx">
                <Image
                  style={{ color: "#000" }}
                  width={32}
                  height={32}
                  src={Icon2}
                  alt="icon2"
                />
                <p className="paragraph01">
                  Ensuring a higher level of security where the volatility of
                  one asset doesn’t compromise the entire protocol.
                </p>
              </div>
              <div className="flex inn-bx">
                <Image
                  style={{ color: "#000", marginRight: "5px" }}
                  width={32}
                  height={32}
                  src={Icon3}
                  alt="icon3"
                />
                <p className="paragraph01">
                  Lenders will have the power to earn a risk-free yield on major
                  crypto assets and a long list of tokenized assets.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default index;
