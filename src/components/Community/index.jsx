"use client";
import "./styles/index.scss";
import Link from "next/link";
import Image from "next/image";
import Upper from "./upper";
import Mixicon from "../../../public/assets/mix-icon.png";
import { motion } from "framer-motion";
import {
  Instagram,
  Twitter,
  Reddit,
  Telegram,
  LogoBox,
  Medium,
} from "../../../public/assets/";
const index = () => {
  return (
    <section className="padding-block-900 community-main">
      <div className="container2">
        <div className="even-block">
          <div className="">
            <motion.div
              initial={{ opacity: 0.5, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 0.8 }}
            >
              <h2 className="heading03">
                Join our <br></br>Community
              </h2>
              <p className="secondary-heading02 ">
                Any user can create any ERC20/ERC20 pool to begin lending and
                borrowing for those assets, thereby making every digital asset
                productive.
              </p>
            </motion.div>
            <div className="flex padding-block-200 social">
              <Upper href="www.medium.com">
                <Image src={Medium} width="30" height="30" />{" "}
              </Upper>
              <Upper href="www.reddit.com">
                <Image
                  src={Instagram}
                  width="30"
                  height="30"
                  alt="Instagram icon"
                />
              </Upper>
              <Upper href="www.reddit.com">
                <Image src={Reddit} width="30" height="30" alt="Reddit icon" />
              </Upper>
              <Upper href="www.telegram.com">
                <Image
                  src={Telegram}
                  width="30"
                  height="30"
                  alt="Reddit icon"
                />
              </Upper>
              <Upper href="www.twitter.com">
                <Image src={Twitter} width="30" height="30" alt="Reddit icon" />
              </Upper>
            </div>
          </div>
          <div className="boxx">
            <div className="logo-circle pulse">
              <Image className="logo-img" src={LogoBox} alt="logo Image" />
            </div>
            <div className="icons_bx">
              <Image src={Mixicon} className="mix-icon" alt="mix icons" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
