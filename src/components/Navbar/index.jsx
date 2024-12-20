"use client";
import { useState, useEffect, useRef } from "react";
import "./styles/index.scss";

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
  const dropdownRef = useRef(null);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <header className='primary-header relative'>
      <div className='wrapper'>
        <div className='nav-wrapper'>
          <motion.div
            className='logo-bx'
            variants={textVariants}
            initial='initial'
            animate='animate'
          >
            <a href='#'>
              <Image
                className='logo'
                src={Logo}
                width='165'
                height='46'
                alt='Logo'
              />
            </a>
          </motion.div>

          <nav className='primary-navigation'>
            <motion.ul
              variants={textVariants}
              initial='initial'
              animate='animate'
              aria-label='Primary'
              role='list'
              className='nav-list'
            >
              {/* <li className="hide">
                <a className="links" href="#">Home</a>
              </li> */}
              <li className='hide'>
                <a
                  className='links'
                  href='https://unilend.gitbook.io/unilend-finance/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Developers
                </a>
              </li>
              <li className='hide'>
                <a
                  className='links'
                  href='https://unilend.medium.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Blogs
                </a>
              </li>
              <li className='hide'>
                <a
                  className='links'
                  href='https://vote.unilend.finance/'
                  target='_blank'
                >
                  Governance
                </a>
              </li>
              {/* <li>
                <motion.button
                  variants={textVariants}
                  initial='initial'
                  animate='animate'
                  className='button main-btn'
                >
                  <a
                    href='https://v1.unilend.finance'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    V1 App
                  </a>
                </motion.button>
              </li> */}
              <li>
                <motion.button
                  variants={textVariants}
                  initial='initial'
                  animate='animate'
                  className='button main-btn'
                >
                  <a
                    href='https://v2.unilend.finance/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    V2 App
                  </a>
                </motion.button>
              </li>
              <li>
                <motion.button
                  variants={textVariants}
                  initial='initial'
                  animate='animate'
                  className='button main-btn'
                >
                  <a
                    href='https://app.numa.network/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Numa
                  </a>
                </motion.button>
              </li>
              <li>
                <motion.button
                  variants={textVariants}
                  initial='initial'
                  animate='animate'
                  className='button main-btn'
                >
                  {/* <a href='#' target='_blank' rel='noopener noreferrer'> */}
                  <a href='#'>Lamaa</a>
                </motion.button>
              </li>
              <li>
                <div className='side_bx'>
                  <div className='hamIcon' onClick={toggleDropdown}>
                    <Image src={Hamburger} />
                  </div>
                </div>
              </li>
            </motion.ul>

            <div className='dropdownContainer'>
              {isDropdownOpen && (
                <div ref={dropdownRef} className='dropdownContent'>
                  <a href='#'>Home</a>
                  <a
                    href='https://unilend.gitbook.io/unilend-finance/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Developers
                  </a>
                  <a
                    href='https://unilend.medium.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Blogs
                  </a>
                  <a href='https://vote.unilend.finance/' target='_blank'>
                    Governance
                  </a>
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
