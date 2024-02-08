"use client";
import { motion } from "framer-motion";
import "./styles/index.scss";
export default function Upper({ children, href }) {
  return (
    <motion.a
      className="shift-l"
      href={href} target="_blank"
      initial={{ x: 0 }}
      whileHover={{ y: -20 }}
      transition={{ 
        x: { type: "spring", stiffness: 100 },
        ease:"easeIn",
        duration:.4,
    }}
    >
      {children}
    </motion.a>
  );
}
