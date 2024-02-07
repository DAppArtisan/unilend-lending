"use client";
import { useState } from "react";
import "./styles/index.scss";
import styles from "./styles/style.module.scss";
import Link from "next/link";
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
          <motion.span
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            <Link href="#">
              <Image className="logo" src={Logo} width="auto" height="auto" alt="Logo" />
            </Link>
          </motion.span>

          <nav className="primary-navigation">
            <motion.ul
              variants={textVariants}
              initial="initial"
              animate="animate"
              aria-label="Primary"
              role="list"
              className="nav-list"
            >
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Developers</a>
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>
              {/* <li>
                <a href="#">Brand Kit</a>
              </li> */}
              
            </motion.ul>
            <Link href="https://v1.unilend.finance" target="_blank">
              <motion.button
                variants={textVariants}
                initial="initial"
                animate="animate"
                className="button main-btn"
              >
                V1 App
              </motion.button>
            </Link>
            <Link href="https://testnet.unilend.finance" target="_blank">
              <motion.button
                variants={textVariants}
                initial="initial"
                animate="animate"
                className="button main-btn"
              >
                V2 Testnet
              </motion.button>
            </Link>

            <div className="dropdownContainer">
              <div className="side_bx">
                <div className="hamIcon" onClick={toggleDropdown}>
                  <Image src={Hamburger} />
                </div>
              </div>
              {isDropdownOpen && (
                <div className="dropdownContent">
                  <a href="#">Home</a>
                  <a href="#">Developers</a>
                  <a href="#">Blogs</a>
                  {/* <a href="#">Brand Kit</a> */}
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
