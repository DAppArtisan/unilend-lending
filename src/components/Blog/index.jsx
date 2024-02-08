"use client"
import Carousal from "./carousal";
import "./styles/index.scss";

import {motion} from "framer-motion"

export default async function Blogs() {
  // const postsPromise = getPosts();
  // const [posts] = await Promise.all([postsPromise]);
  return (
    <section className="padding-block-400 ">
      <div className="cta">
        <div className="container2 ">
          <motion.div 
           className="info-container">
            <h2 className="heading01">Media Coverage </h2>
            <p className="secondary-heading01">
            Stay up-to-date with our latest coverage in top news outlets.
            </p>
          </motion.div>
          <Carousal />
        </div>
      </div>
    </section>
  );
}
