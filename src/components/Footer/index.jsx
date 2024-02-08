"use client";
import "./styles/index.scss";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Logo from "../../../public/assets/logo.svg";
import {
  Telegram,
  Twitter,
  Instagram,
  Reddit,
  Linkdin,
  Medium,
} from "../../../public/assets/";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const Index = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = fetch("https://sendgrid-api.vercel.app/", {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mail: email,
        }),
      });
      if (response) {
        toast("Subscription successful", {
          hideProgressBar: true,
          autoClose: 2000,
          type: "success",
          position: "bottom-right",
        });
        setEmail("");
      } else {
        // Handle error
        toast("Subscription failed", {
          hideProgressBar: true,
          autoClose: 2000,
          type: "success",
          position: "bottom-right",
        });
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      toast("Subscription failed", {
        hideProgressBar: true,
        autoClose: 2000,
        type: "success",
        position: "bottom-right",
      });
    }
  };

  return (
    <section className="footer padding-top-900">
      <div className="container2">
        <div className="common-container">
          <div className="footer-container">
            <ul className="footer-first-child">
              <li className="footer-title">GENERAL</li>
              <Link href="#explore-dapp-section" className="sub-text">
                <li>About Us</li>
              </Link>
              <Link
                className="sub-text"
                href="https://angel.co/company/unilend-finance-1/jobs"
                target="_blank"
              >
                <li>Career</li>
              </Link>
            </ul>
            <ul>
              <li className="footer-title">COMMUNITY</li>
              <Link
                className="sub-text"
                href="https://unilend.medium.com/introducing-the-unilend-legion-ambassador-program-accelerating-the-evolution-of-defi-dbed1a33ba97"
                target="_blank"
              >
                <li>Legions</li>
              </Link>
              <Link
                className="sub-text"
                href="https://unilend.gitbook.io/unilend-finance/v/unilend-v1/community/unilend-grants"
                target="_blank"
              >
                <li>Grants</li>
              </Link>
            </ul>
            <ul>
              <li className="footer-title">DEVELOPER</li>
              <li>
                <Link
                  className="sub-text"
                  href="https://unilend.gitbook.io/unilend-finance/"
                  target="_blank"
                >
                  Gitbook
                </Link>
              </li>
              <li>
                <Link
                  className="sub-text"
                  href="https://www.youtube.com/channel/UCggNiVE5EGWGHh1YwIUW7Ug"
                  target="_blank"
                >
                  Tutorial
                </Link>
              </li>
              <li>
                <Link
                  className="sub-text"
                  href="https://unilend.gitbook.io/unilend-finance/"
                  target="_blank"
                >
                  Brand Kit
                </Link>
              </li>
            </ul>
            <ul className="footer-last-child">
              <li className="footer-title">NEWSLETTER</li>
              <li className="subscribe-text">
                Subscribe to recieve updates from us
              </li>
              <li className="footer-input-content">
                <input
                  className="footer-input"
                  type="email"
                  placeholder="Email address"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <Link href="#">
                  <Image
                    className="logo-content-img"
                    src={Telegram}
                    alt="logo footer"
                  />
                </Link>
              </li>
              <li>
                <button onClick={handleSubmit} className="button">
                  Submit
                </button>
                <ToastContainer />
              </li>
              <div className="logo-content">
                <Link href="https://t.me/UniLendFinance" target="_blank">
                  <Image
                    className="logo-content-img"
                    src={Telegram}
                    alt="telegram Logo"
                  />
                </Link>
                <Link
                  href="https://twitter.com/UniLend_Finance"
                  target="_blank"
                >
                  <Image
                    className="logo-content-img"
                    src={Twitter}
                    alt="twitter Logo"
                  />
                </Link>
                <Link
                  href="https://www.instagram.com/unilendfinance/"
                  target="_blank"
                >
                  <Image
                    className="logo-content-img"
                    src={Instagram}
                    alt="instagram logo"
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/unilend-finance/"
                  target="_blank"
                >
                  <Image
                    className="logo-content-img"
                    src={Linkdin}
                    alt="linkedin logo"
                  />
                </Link>
                <Link href="https://www.reddit.com/r/UniLend/" target="_blank">
                  <Image
                    className="logo-content-img"
                    src={Reddit}
                    alt="reddit logo"
                  />
                </Link>
                <Link href="https://unilend.medium.com/" target="_blank">
                  <Image
                    className="logo-content-img"
                    src={Medium}
                    alt="medium logo"
                  />
                </Link>
              </div>
            </ul>
          </div>
          <div className="social-media-container">
            <div className="logo-content-web">
              <Image
                src={Logo}
                width="auto"
                height="auto"
                className="footerlogo"
                alt="footer logo"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="text-in">
          Copyright &copy; {currentYear} UniLend Ltd. All Rights Reserved
        </div>
      </div>
    </section>
  );
};

export default Index;
