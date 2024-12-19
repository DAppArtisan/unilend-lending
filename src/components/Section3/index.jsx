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
            Smart Mempools with Intents
          </h2>
          <p className='secondary-heading02'>
            Unilend introduces Numa Network that address the gas fees
            complexities, rigidity in transaction scheduling, and the
            complexities of cross-chain intents.
          </p>
          <div className='in-bx'>
            <div className='flex inn-bx'>
              <Image width={32} height={32} src={Icon1} alt='icon1' />
              <p className='paragraph01'>
                Unprecedented control and flexibility in transaction execution
                using intent driven programmable mempools.
              </p>
            </div>
            <div className='flex inn-bx'>
              <Image width={32} height={32} src={Icon2} alt='icon2' />
              <p className='paragraph01'>
                Simplified user experience across all blockchains by eliminating
                the need for managing gas fees across multiple addresses.
              </p>
            </div>
            <div className='flex inn-bx'>
              <Image width={32} height={32} src={Icon3} alt='icon3' />
              <p className='paragraph01'>
                Build Intent-driven dApps where transactions are automatically
                triggered based on predefined rules and conditions.
              </p>
            </div>
          </div>

          <a href='https:app.numa.network' target='_blank'>
            <button className='button2'>Launch App</button>
          </a>
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
