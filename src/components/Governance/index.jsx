"use client";
import React from "react";
import "./index.scss";
import { SlArrowRightCircle } from "react-icons/sl";
import { motion } from "framer-motion";

export default function Governance() {
  return (
    <section className='container2 padding-block-900'>
      <div className='governance-container'>
        <motion.div
          initial={{ opacity: 0.5, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          className='left-content'
        >
          {/* <p>GOVERNANCE</p> */}

          <h2 className='heading02'>Governed and shaped by the community</h2>
          <p className='paragraph01'>
            UniLend Finance governance, empowering token holders to propose and
            vote on protocol changes, ensuring transparency and community-driven
            development.
          </p>
          <div className='buttons'>
            <a href='https://vote.unilend.finance/' target='_blank'>
              <button className='button2'>Join Governance Community</button>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          className='right-content'
        >
          <a href='https://vote.unilend.finance/' target='_blank'>
            <div className='content on-chain'>
              <div>
                <p>ON-CHAIN VOTING</p>
                <SlArrowRightCircle size={20} />
              </div>
              <p>
                Delegate your UFT tokens to vote on-chain with UniLend
                Governance.
              </p>
            </div>
          </a>
          {/* <a href='#' target='_blank'> */}
          <a href='#'>
            <div className='content off-chain'>
              <div>
                <p>OFF-CHAIN VOTING</p>
                <SlArrowRightCircle size={20} />
              </div>
              <p>Engage in decision-making gas free on Snapshot.</p>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
