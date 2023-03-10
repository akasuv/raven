"use client";
import Image from "next/image";
import { LangContext } from "@/context";
import React from "react";

const Navbar = () => {
  const lang = React.useContext(LangContext);

  const langOptions = {
    en: {
      text: "中文",
      href: "/cn",
    },
    cn: {
      text: "English",
      href: "/",
    },
  };

  return (
    <nav className="py-4 px-5 md:px-10 lg:px-12 flex items-center justify-between">
      <a href="/" className="flex gap-x-5 items-center">
        <Image src="/logo.png" alt="Raven" width={36} height={36} />
        <p className="text-white font-bold">Raven Studio</p>
      </a>
      <ul className="text-[#989898] flex gap-x-8">
        <li>
          <a href={langOptions[lang].href}>{langOptions[lang].text}</a>
        </li>
        <li>
          <a href="https://twitter.com/ravenstudio_sh">Twitter</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
