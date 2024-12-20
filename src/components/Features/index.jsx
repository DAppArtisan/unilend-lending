"use client";
import React, { useState } from "react";
import { GrNext } from "react-icons/gr";
import { motion } from "framer-motion";
import "./index.scss";
import Image from "next/image";
import product1 from "../../../public/assets/product1.png";
import product2 from "../../../public/assets/product2.jpeg";
import product3 from "../../../public/assets/product3.png";

export default function OurFeatures() {
  const data = [
    {
      asset: product1,
      description:
        "UniLend Protocol is a decentralized platform enabling permissionless lending and borrowing through smart contracts using over-collateralized cryptocurrency assets.",
      link: "https://bit.ly/3FCj5Bn",
    },
    {
      asset: product2,
      description:
        "Lamaa Create, tokenise, co-own and access modular AI agents built using Lamaa engine. Get in touch with our team to launch your AI Agent and Initial Agent Offering on Lamaa.",
      link: "#",
    },
    {
      asset: product3,
      description:
        "Numa is the ultimate chain abstraction solution. It allows you to transact on multiple chains using multiple addresses without worrying about managing gas fees in any of your wallets.",
      link: "https://medium.com/@numachain/introducing-numa-chain-intent-centric-modular-l1-powering-chain-abstraction-6732bbb53cb9",
    },
  ];
  const [activeTab, setActiveTab] = useState(1);
  return (
    <section className='container2 padding-block-900'>
      <div className='our-products'>
        <motion.div
          initial={{ opacity: 0.5, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          className='info-container'
        >
          <h2 className='heading01'>Our Products</h2>
          {/* <p className='secondary-heading01 padding-top-200'>
            Explore Our Innovative Features: Dive into a World of Permissionless
            Lending <br></br> & Borrowing to Unlock Endless DeFi Possibilities!
          </p> */}
        </motion.div>
        <div className='products'>
          <div className='product-tabs'>
            <div
              className={`tab-item  ${activeTab == 1 && "active"}`}
              onClick={() => setActiveTab(1)}
            >
              <div>
                <h4 className='secondary-heading01'>Unilend V2</h4>
                <p>Permissionless lending and borrowing protocol.</p>
              </div>
              <GrNext size={20} color='#9A8BFA' />
            </div>
            <div
              className={`tab-item  ${activeTab == 2 && "active"}`}
              onClick={() => setActiveTab(2)}
            >
              <div>
                <h4 className='secondary-heading01'>Lamaa AI</h4>
                <p>Build modular AI to automate blockchain solutions.</p>
              </div>
              <GrNext size={20} color='#9A8BFA' />
            </div>
            <div
              className={`tab-item  ${activeTab == 3 && "active"}`}
              onClick={() => setActiveTab(3)}
            >
              <div>
                <h4 className='secondary-heading01'>Numa Network</h4>
                <p>Revolutionizing blockchain with gasless transactions.</p>
              </div>
              <GrNext size={20} color='#9A8BFA' />
            </div>
          </div>
          <div className='product-item'>
            <Image
              src={data[activeTab - 1].asset}
              alt='product'
              // fill
              className='product-img'
            />

            {/* <img
              src={data[activeTab - 1].asset}
              alt='product'
              className='product-img'
            /> */}

            {/* <div className='product-img'></div> */}
            <div className='product-content'>
              <p>{data[activeTab - 1].description}</p>
              <a href={data[activeTab - 1].link} target='_blank'>
                <button className='button'>Learn More</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
