"use client";
import Image from "next/image";
import "./styles/index.scss";
import Icon1 from "../../../public/assets/p1.svg";
import Icon2 from "../../../public/assets/p2.svg";
import Icon3 from "../../../public/assets/p3.svg";
import AgentImage from "../../../public/assets/agent.png";

import { motion } from "framer-motion";
const index = () => {
  return (
    <section className='padding-block-900 section2'>
      <div className='container'>
        <div className='even-colums'>
          <motion.div
            initial={{ opacity: 0.3, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            className='boxx gradient col1'
          >
            {/* <Image className='mainImage' src={Isolated} alt='Isolated Image' /> */}
            <motion.video
              initial={{ opacity: 0.1 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1 }}
              className='mainImage'
              poster={AgentImage}
              autoPlay
              loop
              muted
              playsInline
              preload='metadata'
            >
              <source src='/assets/agent.webm' type='video/webm' />
            </motion.video>
          </motion.div>

          <motion.div
            initial={{ opacity: 0.3, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            className=' col2'
          >
            <h1 className='heading02'>Build Modular Agents</h1>
            <p className='secondary-heading02'>
              Unilend introduces Lamma AI - A platform to build, tokenize and
              launch modular AI Agents with access to blockchain capabilities.
            </p>
            <div className='in-bx'>
              <div className='flex inn-bx'>
                <Image
                  style={{ color: "#000" }}
                  width={32}
                  height={32}
                  src={Icon1}
                  alt='icon1'
                />
                <p className='paragraph01'>
                  Lamaa enables anyone to build modular AI agents with
                  functionality modules that can be stacked up like legos.
                </p>
              </div>
              <div className='flex inn-bx'>
                <Image
                  style={{ color: "#000" }}
                  width={32}
                  height={32}
                  src={Icon2}
                  alt='icon2'
                />
                <p className='paragraph01'>
                  Built agents with blockchain capabilities and integration with
                  all major platforms using Lamaa’s SDK’s and modules.
                </p>
              </div>
              <div className='flex inn-bx'>
                <Image
                  style={{ color: "#000", marginRight: "5px" }}
                  width={32}
                  height={32}
                  src={Icon3}
                  alt='icon3'
                />
                <p className='paragraph01'>
                  User friendly interface to build, tokenize and launch AI
                  agents without the need for coding.
                </p>
              </div>
            </div>
            <div className='buttons'>
              <a href='#'>
                <button className='button2'> Learn More</button>
              </a>
              <a href='https://lamaa.ai/' target='_blank'>
                <button className='button2'>Launch App</button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default index;
