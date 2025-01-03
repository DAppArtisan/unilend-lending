"use client";
import Image from "next/image";
import Link from "next/link";
import "./styles/index.scss";
import Image1 from "../../../public/assets/permission.gif";
import Icon1 from "../../../public/assets/icon1.svg";
import Icon2 from "../../../public/assets/icon2.svg";
import Icon3 from "../../../public/assets/icon3.svg";

import { motion } from "framer-motion";
const index = () => (
  <section id='about-us' className='section1 padding-block-900'>
    <div className='container'>
      <div className='even-colums'>
        <motion.div
          initial={{ opacity: 0.3, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.8 }}
          className=''
        >
          <h2 id='about-us' className='heading02'>
            Permissionless DeFi Protocol
          </h2>
          <p className='secondary-heading02'>
            Unilend welcomes every asset to the defi ecosystem by opening up
            lending and borrowing functionalities to every ERC20 token through
            permissionless listing.
          </p>
          <div className='in-bx'>
            <div className='flex inn-bx'>
              <Image width={32} height={32} src={Icon1} alt='icon1' />
              <p className='paragraph01'>
                Create an Isolated Dual Asset Pool to enable Permissionless
                Lending and Borrowing for any asset pair without any risk to
                other assets.
              </p>
            </div>
            <div className='flex inn-bx'>
              <Image width={32} height={32} src={Icon2} alt='icon2' />
              <p className='paragraph01'>
                Lenders enjoy the flexibility to choose the assets against which
                they wish to lend by selecting a corresponding pool.
              </p>
            </div>
            <div className='flex inn-bx'>
              <Image width={32} height={32} src={Icon3} alt='icon3' />
              <p className='paragraph01'>
                Token holders can manage LVR for pools, price oracle sources and
                other changes through on-chain governance
              </p>
            </div>
          </div>
          <div className='buttons'>
            <a href='https://bit.ly/3FCj5Bn' target='_blank'>
              <button className='button2'> Learn More</button>
            </a>
            <a href='https://v1.unilend.finance' target='_blank'>
              <button className='button2'>Launch V1 App</button>
            </a>
            <a href='https://v2.unilend.finance/' target='_blank'>
              <button className='button2'>Launch V2 App</button>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.3, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.8 }}
          className='boxx gradient'
        >
          {/* <Image className="gradient"  src={RedGradient} alt="gradient"/> */}
          <Image className='mainImage' src={Image1} alt='permissionless' />
        </motion.div>
      </div>
    </div>
  </section>
);

export default index;
