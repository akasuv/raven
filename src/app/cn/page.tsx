"use client";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { LangContext } from "@/context";

export default function CN() {
  return (
    <LangContext.Provider value="cn">
      <main>
        <Hero />
        <Introduction />
        <Contact />
        <Footer />
      </main>
    </LangContext.Provider>
  );
}
