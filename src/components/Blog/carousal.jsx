"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import Carousel from "react-simply-carousel";
import  Media1  from "../../../public/assets/media1.png";
import  Media2  from "../../../public/assets/media2.png";
import  Media3  from "../../../public/assets/media3.png";
import  Media4  from "../../../public/assets/media4.png";
import  Media5  from "../../../public/assets/media5.png";
import  Media6  from "../../../public/assets/media6.png";
import  Media7  from "../../../public/assets/media7.png";

import "./styles/index.scss";
const Carousal = () => {

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  return (
    <div className="padding-block-500">
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
            <Link href="https://cointelegraph.com/press-releases/date-revealed-binance-listed-unilends-product-to-launch-on-ethereum-mainnet-on-12th-feb" target="_blank">
              <div className="carousal-data">
                <Image src={Media1} alt="media image 1" />
                <div className="bx_outer floww">
                  <div className="bx_inn">
                    <p className="">From [Cointelegraph]</p>
                    <p className="">Feb 01, 2024</p>
                  </div>
                  <h4 className="padding-block-100 title">Date revealed: Binance listed UniLend&apos;s product to launch on Ethereum Mainnet on 12th Feb</h4>
                  <p className=" para">
                  UniLend&apos;s mission is succinctly encapsulated in its commitment to &quot;Make Every Digital Asset Productive.&quot;
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="carousal-bxx">
            <Link href="https://www.benzinga.com/pressreleases/24/02/36920425/date-revealed-binance-listed-unilends-product-to-launch-on-ethereum-mainnet-on-12th-feb" target="_blank">
              <div className="carousal-data">
                <Image src={Media2} alt="media image 2" />
                <div className="bx_outer floww">
                  <div className="bx_inn">
                    <p className="">From [benzinga]</p>
                    <p className="">FEB 01, 2024</p>
                  </div>
                  <h4 className="padding-block-100 title">Date Revealed: Binance listed UniLend&apos;s product to launch on Ethereum Mainnet on 12th Feb</h4>
                  <p className=" para">
                  UniLend Finance, the decentralized finance (DeFi) platform, is set to launch its much anticipated UniLend V2 on Ethereum Mainnet on 12th February 2024.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="carousal-bxx">
            <Link href="https://cointelegraph.com/press-releases/how-unilend-is-shaping-the-future-of-defi-with-permissionless-lending-and-borrowing-protocol" target="_blank">
              <div className="carousal-data">
                <Image src={Media3} alt="media image 3" />
                <div className="bx_outer floww">
                  <div className="bx_inn">
                    <p className="">From [Cointelegraph]</p>
                    <p className="">OCT 21, 2021</p>
                  </div>
                  <h4 className="padding-block-100 title">How UniLend is shaping the future of DeFi with permissionless lending and borrowing protocol</h4>
                  <p className=" para">
                  UniLend Finance published their protocol update blog introducing UniLend v2. It is stated that with this update,
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="carousal-bxx">
            <Link href="https://news.bitcoin.com/unilend-v2-launched-becomes-1st-true-permissionless-lending-and-borrowing-protocol/" target="_blank">
              <div className="carousal-data">
                <Image src={Media4} alt="media image 4" />
                <div className="bx_outer floww">
                  <div className="bx_inn">
                    <p className="">From [bitcoin.com]</p>
                    <p className="">Oct 28, 2022</p>
                  </div>
                  <h4 className="padding-block-100 title">UniLend V2 Launched: Becomes 1st True Permissionless Lending and Borrowing Protocol</h4>
                  <p className=" para">
                  Launching its much awaited V2 testnet on the Goerli chain today, UniLend team is looking to Revolutionise the Lending and Borrowing scene
…
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="carousal-bxx">
            <Link href="https://www.coindesk.com/business/2020/09/29/investors-flock-to-indias-defi-scene-months-after-central-bank-ban-overturned/" target="_blank">
              <div className="carousal-data">
                <Image src={Media5} alt="media image 5" />
                <div className="bx_outer floww">
                  <div className="bx_inn">
                    <p className="">From [Coindesk]</p>
                    <p className="">Sep 29, 2020</p>
                  </div>
                  <h4 className="padding-block-100 title">Investors Flock to India&apos;s DeFi Scene Months After Central Bank Ban Overturned</h4>
                  <p className=" para">
                  UniLend&apos;s mission is succinctly encapsulated in its commitment to “Make Every Digital Asset Productive.”
…
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="carousal-bxx">
            <Link href="https://news.bitcoin.com/unilend-finance-empowers-community-governance-with-the-launch-of-uftg-token/" target="_blank">
              <div className="carousal-data">
                <Image src={Media6} alt="media image 6" />
                <div className="bx_outer floww">
                  <div className="bx_inn">
                    <p className="">From [bitcoin.com]</p>
                    <p className="">Aug 30, 2023</p>
                  </div>
                  <h4 className="padding-block-100 title">UniLend Finance Empowers Community Governance with the Launch of UFTG Token</h4>
                  <p className=" para">
                  UniLend Finance, a leading decentralized finance (DeFi) protocol is thrilled to announce the launch of its new wrapped governance token,
…
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="carousal-bxx">
            <Link href="https://blockster.com/making-every-digital-asset-productive-with-unilend-v2" target="_blank">
              <div className="carousal-data">
                <Image src={Media7} alt="media image 7" />
                <div className="bx_outer floww">
                  <div className="bx_inn">
                    <p className="">From [coindesk]</p>
                    <p className="">Feb 1, 2023</p>
                  </div>
                  <h4 className="padding-block-100 title">Making Every Digital Asset Productive With UniLend V2</h4>
                  <p className=" para">
                  UniLend V2 is a permissionless lending and borrowing protocol on Ethereum Sepolia Testnet. It offers DeFi services with new features,
…
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
