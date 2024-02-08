"use client";
import { useState } from "react";
import "./styles/index.scss";
import styles from "./styles/style.module.scss";

import Image from "next/image";
import Logo from "../../../public/assets/logo.svg";
import Hamburger from "../../../public/assets/hamburger.svg";
import { motion, AnimatePresence } from "framer-motion";

const textVariants = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 1 },
};

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="primary-header relative">
      <div className="wrapper">
        <div className="nav-wrapper">
          <motion.div
            className="logo-bx"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            <a href="#">
              <Image
                className="logo"
                src={Logo}
                width="165"
                height="46"
                alt="Logo"
              />
            </a>
          </motion.div>

          <nav className="primary-navigation">
            <motion.ul
              variants={textVariants}
              initial="initial"
              animate="animate"
              aria-label="Primary"
              role="list"
              className="nav-list"
            >
              <li className="hide">
                <a className="links" href="/">Home</a>
              </li>
              <li className="hide">
                <a className="links"
                  href="https://unilend.gitbook.io/unilend-finance/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Developers
                </a>
              </li>
              <li className="hide">
                <a className="links"
                  href="https://unilend.medium.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blogs
                </a>
              </li>
              <li className="hide">
                <a className="links" href="#">Governance</a>{" "}
                {/* Update the href to your governance route */}
              </li>
              <li>
                <motion.button
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  className="button main-btn"
                >
                  <a
                    href="https://v1.unilend.finance"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    V1 App
                  </a>
                </motion.button>
              </li>
              <li>
                <motion.button
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  className="button main-btn"
                >
                  <a
                    href="https://testnet.unilend.finance"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    V2 Testnet
                  </a>
                </motion.button>
              </li>
              <li>
              <div className="side_bx">
                <div className="hamIcon" onClick={toggleDropdown}>
                  <Image src={Hamburger} />
                </div>
              </div>
              </li>
            </motion.ul>

            <div className="dropdownContainer">
             
              {isDropdownOpen && (
                <div className="dropdownContent">
                  <a href="/">Home</a>
                  <a
                    href="https://unilend.gitbook.io/unilend-finance/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Developers
                  </a>
                  <a
                    href="https://unilend.medium.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Blogs
                  </a>
                  <a href="#">Governance</a>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
