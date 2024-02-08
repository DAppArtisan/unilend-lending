"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import Carousel from "react-simply-carousel";
import { Blog1 } from "../../../public/assets";
import "./styles/index.scss";
const Carousal = () => {

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  return (
    <div className="padding-block-300">
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
        {/* {posts.items.map((post) => (
          <div key={post.guid} className="carousal-bxx">
            <Link href={post.link} target="_blank">
              <div className="carousal-data">
                <Image src={Blog1} alt="blog image" />
                <div className="bx_outer floww">
                  <div className="bx_inn">
                    <p className="">From [Medium]</p>
                    <p className="">{post.pubDate}</p>
                  </div>
                  <h4 className="padding-block-100 title">{post.title}</h4>
                  <p className=" para">
                    Wrapping up the merry end of 2023, December has been a
                    joyous whirlwind of celebrations and achievements.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))} */}
          <div className="carousal-bxx">
            <Link href="#" target="_blank">
              <div className="carousal-data">
                <Image src={Blog1} alt="blog image" />
                <div className="bx_outer floww">
                  <div className="bx_inn">
                    <p className="">From [Cointelegraph]</p>
                    <p className="">Nov 23, 2023</p>
                  </div>
                  <h4 className="padding-block-100 title">Date revealed: Binance listed UniLend’s product to launch on Ethereum Mainnet on 12th Feb</h4>
                  <p className=" para">
                    Wrapping up the merry end of 2023, December has been a
                    joyous whirlwind of celebrations and achievements.
                  </p>
                </div>
              </div>
            </Link>
          </div>
      </Carousel>
    </div>
  );
};

export default Carousal;
