import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen mx-8 md:mx-16">
        <Marquee />
        <Hero />
        <Stats />
      </div>
    </>

  );
}
