import Image from "next/image";
import Tag from "@/components/Tag";
import { LangContext } from "@/context";
import React from "react";

const ServiceCard = () => {
  const lang = React.useContext(LangContext);

  const title = {
    en: "Deliver",
    cn: "交付",
  };
  const description = {
    en: `
          Time and quality are what we provide, we value yours as we value our
          own. With us, you can approve your ideas so quickly that like you’re
          the engineer yourself, you’re the brain and we’re the hands.`,
    cn: `我们提供的是时间和质量，我们重视您的时间和我们自己重视的时间一样。我们快速高效地呈现，我们知道一次快速的产品落地反馈比无数次的思考更有价值。有了我们，您可以如自己是工程师一样迅速地验证您的想法，您是大脑，我们是双手。`,
  };
  return (
    <div
      className="relative max-w-full h-[583px] md:h-[376px] p-[30px] md:p-[10px]  flex flex-col md:flex-row justify-between items-center gap-x-24 
    drop-shadow-[0_2px_9px_rgba(0,0,0,0.25)]
    border-[0.8px] border-[rgba(152,152,152,0.3)]
    rounded-3xl
    overflow-hidden
    bg-[rgba(217,217,217,0.08)]
    backdrop-blur-3xl
    gap-y-[30px]
    md:gap-y-0
  "
    >
      <div className="z-10 md:pl-[55px]">
        <p className="text-white mb-2.5">{title[lang]}</p>
        <p className="text-[#989898]">{description[lang]}</p>
        {/* <div className="flex gap-x-2.5 mt-4"> */}
        {/*   <Tag text="Design Services" /> */}
        {/*   <Tag text="Development Services" /> */}
        {/* </div> */}
      </div>
      <div className="lg:w-[569px] w-[346px] h-[327px] max-w-full lg:h-[356px] relative grow shrink-0">
        <Image
          className="z-10 rounded-2xl hidden lg:block"
          src="/deliver.png"
          alt="Service Card"
          fill
        />
        <Image
          className="z-10 rounded-2xl lg:hidden"
          src="/deliver-mobile.png"
          alt="Service Card"
          fill
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default ServiceCard;
