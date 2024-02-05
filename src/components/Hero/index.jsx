"use client";
import "./styles/index.scss";
import Image from "next/image";
import { Suspense } from "react";
import Video from "./videoComponent";
import RedBg from "../../../public/assets/gr--red.svg"
const index = () => (
  <section className=" overflow">
   <div className="image-grid">
    <div className="bg-image">
  </div>
</div>




<div> 

    <Suspense fallback={<p>Loading video...</p>}>
      <Video />

    </Suspense>

</div>

  </section>
);

export default index;
