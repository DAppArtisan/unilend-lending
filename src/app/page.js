import Image from 'next/image'
import {Section1, Section2, Features, Hero, Blog, Community, Client, Trade } from "@/components"
export default function Home() {
  return (
    <main>
    
      <Hero/>
      <Trade/>
     <Section1/>
     <Section2/>
     <Features/>
     <Client/>
     {/* <Blog/> */}
     <Community/>
    </main>
  )
}
