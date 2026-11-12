import React from "react";

import Header from "../partials/Header";
import HeroHome from "../partials/HeroHome";
import About from "../partials/About.jsx";
import Lowongan from "../partials/Lowongan.jsx";
import Newsletter from "../partials/Newsletter";
import Footer from "../partials/Footer";
import { DotPattern } from "@/components/ui/dot-pattern";

function Home() {
  return (
    <div className="relative isolate min-h-screen">
      <DotPattern className="fixed z-0 min-h-screen opacity-50" />
      <div className="relative z-10 flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <HeroHome />
        <About />
        <Lowongan />
        <Newsletter />
      </main>

      {/*  Site footer */}
      <Footer />
      </div>
    </div>
  );
}

export default Home;
