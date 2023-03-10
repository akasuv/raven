"use client";
import React from "react";
import { LangContext } from "@/context";

const Hero = () => {
  const lang = React.useContext(LangContext);

  const title = {
    en: "Let your idea fly with us.",
    cn: "灵感与创意齐飞。",
  };

  const description = {
    en: "A not-so-creative studio based in Shanghai.",
    cn: "来自上海，不怎么有创意",
  };

  return (
    <div className="flex flex-col gap-y-7 items-center max-w-[660px] mx-auto md:pt-20 md:pb-10 p-[30px] ">
      <p className="text-white opacity-95 text-4xl text-center">
        {title[lang]}
      </p>
      <p className="text-[#767779] text-xs font-bold">{description[lang]}</p>
      {/* <p className="text-[#989898] mt-1 text-center"> */}
      {/*   Raven Studio is an lorem ipsum dolor sit amet, consectetur adipiscing */}
      {/*   elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum */}
      {/*   dolor sit amet, consectetur adipiscing elit. */}
      {/* </p> */}
      {/* <Button>Lets Collaborate</Button> */}
    </div>
  );
};

export default Hero;
