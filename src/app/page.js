import Image from "next/image";
import {
  Section1,
  Section2,
  Section3,
  OurFeatures,
  Features,
  Hero,
  Blog,
  Governance,
  Community,
  Client,
  Trade,
} from "@/components";
export default function Home() {
  return (
    <main>
      <Hero />
      <Trade />
      <Section1 />
      <Section2 />
      <Section3 />
      <OurFeatures />
      {/* <Features /> */}
      <Client />
      <Blog />
      <Governance />
      <Community />
    </main>
  );
}
