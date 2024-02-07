"use client";
import { useState } from "react";
import "./styles/index.scss";
import Image from "next/image";
import Image1 from "../../../public/assets/cl.svg";
import Image2 from "../../../public/assets/DAP.svg";
import Image3 from "../../../public/assets/fp.svg";
import Image4 from "../../../public/assets/G.svg";
import Image5 from "../../../public/assets/NFT.svg";
import Image6 from "../../../public/assets/pl.svg";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import Carousel from "react-simply-carousel";
import { motion } from "framer-motion";
const Features = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  return (
    <section>
      <div className="container2 padding-block-900">
        <motion.div
          initial={{ opacity: 0.5, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          className="info-container"
        >
          <h2 className="heading01">Our Features</h2>
          <p className="secondary-heading01 padding-top-200">
            Any user can create any ERC20/ERC20 pool to begin lending and
            borrowing <br></br> for those assets, thereby making every digital
            asset productive.
          </p>
        </motion.div>

        <div className="content padding-block-200">
          <div className="feature_bx">
            <div className="content-container">
              <div className="bg-bx">
                <div className="bg-inn box1" />
              </div>
              <motion.div className="feat-img"  whileHover={{ y: -20 }}
                  transition={{
                    ease: "easeInOut",
                    duration: .5,
                  }}>
                <Image alt="" className="image-icon" src={Image1} />
              </motion.div>
              <h3 className="f-text">Concentrated Liquidaion</h3>
            </div>
            <div className="content-container">
              <div className="bg-bx">
                <div className="bg-inn box2" />
              </div>
              <motion.div className="feat-img"  whileHover={{ y: -20 }}
                  transition={{
                    ease: "easeInOut",
                    duration: .5,
                  }}>
                <Image
                  alt="Dual asset pool"
                  className="image-icon"
                  
                  src={Image2}
                />
              </motion.div>
              <h3 className="f-text">Dual Asset Pool</h3>
            </div>
            <div className="content-container">
              <div className="bg-bx">
                <div className="bg-inn box3" />
              </div>
              <motion.div className="feat-img"  whileHover={{ y: -20 }}
                  transition={{
                    ease: "easeInOut",
                    duration: .5,
                  }}>
                <Image
                  alt="Flexible pricing"
                  className="image-icon"
                  
                  src={Image3}
                />
              </motion.div>
              <h3 className="f-text">Flexible Pricing</h3>
            </div>
            <div className="content-container">
              <div className="bg-bx">
                <div className="bg-inn box4" />
              </div>
              <motion.div className="feat-img"  whileHover={{ y: -20 }}
                  transition={{
                    ease: "easeInOut",
                    duration: .5,
                  }}>
                <Image
                  alt="Governance"
                  className="image-icon"
                  
                  src={Image4}
                />
              </motion.div>
              <h3 className="f-text">Governance</h3>
            </div>
            <div className="content-container">
              <div className="bg-bx">
                <div className="bg-inn box5" />
              </div>
              <motion.div className="feat-img"  whileHover={{ y: -20 }}
                  transition={{
                    ease: "easeInOut",
                    duration: .5,
                  }}>
                <Image
                  alt="Nft"
                  className="image-icon"
                  
                  src={Image5}
                />
              </motion.div>
              <h3 className="f-text">NFT</h3>
            </div>
            <div className="content-container">
              <div className="bg-bx">
                <div className="bg-inn box6" />
              </div>
              <motion.div className="feat-img"  whileHover={{ y: -20 }}
                  transition={{
                    ease: "easeInOut",
                    duration: .5,
                  }}>
                <Image
                  alt="Permissionless listing"
                  className="image-icon"
                  
                  src={Image6}
                />
              </motion.div>
              <h3 className="f-text">Permissionless Listing</h3>
            </div>
          </div>
        </div>

        <div className="carousel_container slider">
          <Carousel
            containerProps={{
              className: "containerProps",
            }}
            activeSlideIndex={activeSlideIndex}
            onRequestChange={setActiveSlideIndex}
            infinite={false}
            innerProps={{
              className: "innerclass",
            }}
            forwardBtnProps={{
              children: (
                <RiArrowRightSLine
                  style={{
                    fontSize: "25px",
                    fontWeight: 700,
                    position: "relative",
                  }}
                />
              ),
              className: "forwardBtnProps",
            }}
            backwardBtnProps={{
              children: (
                <RiArrowLeftSLine
                  style={{
                    fontSize: "25px",
                    fontWeight: 700,
                    position: "relative",
                  }}
                />
              ),
              className: "backwardBtnProps",
            }}
            responsiveProps={[
              {
                itemsToShow: 4,
                itemsToScroll: 1,
                minWidth: 768,
              },
            ]}
            speed={400}
            easing="linear"
          >
            <div className="carousal-bxx">
              <div className="feature_slider box1 icon-back">
                <Image src={Image1} alt="image1" />
              </div>
              <p className="paragraph02"> Concentrated Liquidaion</p>
            </div>
            <div className="carousal-bxx">
              <div className="feature_slider box1 icon-back">
                <Image src={Image2} alt="image1" />
              </div>
              <p className="paragraph02">Dual asset pool</p>
            </div>
            <div className="carousal-bxx">
              <div className="feature_slider box1 icon-back">
                <Image src={Image3} alt="image1" />
              </div>
              <p className="paragraph02">Flexible pricing</p>
            </div>
            <div className="carousal-bxx">
              <div className="feature_slider box1 icon-back">
                <Image src={Image4} alt="image1" />
              </div>
              <p className="paragraph02">Governance</p>
            </div>
            <div className="carousal-bxx">
              <div className="feature_slider box1 icon-back">
                <Image src={Image5} alt="image1" />
              </div>
              <p className="paragraph02">Nft</p>
            </div>
            <div className="carousal-bxx">
              <div className="feature_slider box1 icon-back">
                <Image src={Image6} alt="image1" />
              </div>
              <p className="paragraph02">Permissionless listing</p>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Features;
