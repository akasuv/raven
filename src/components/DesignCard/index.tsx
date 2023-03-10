import React from "react";
import Image from "next/image";
import { LangContext } from "@/context";
import Tag from "@/components/Tag";

const DesignCard = () => {
  const lang = React.useContext(LangContext);

  const title = {
    en: "Design",
    cn: "设计",
  };
  const description = {
    en: `Creativity is flowing in our genes. We're not just designing for visual
      appeal, but for expressing our aesthetic as digital-age artists.`,
    cn: "创造力流动于我们的基因之中，我们不仅仅在为外观设计，同时也在表达作为数字时代艺术家的审美",
  };
  return (
    <div
      className="relative w-full  p-[30px]   md:p-[35px] pb-0 md:pb-0
      h-full
    gap-y-[30px]
    drop-shadow-[0_2px_9px_rgba(0,0,0,0.25)]
    border-[0.8px] border-[rgba(152,152,152,0.3)]
    rounded-3xl
    overflow-hidden
    bg-[rgba(217,217,217,0.08)]
    backdrop-blur-3xl
    relative
    flex
    flex-col
    justify-between
  "
    >
      <div>
        <p className="text-white mb-2.5">{title[lang]}</p>
        <p className="text-[#989898]">{description[lang]}</p>
      </div>
      {/* <div className="flex gap-x-2.5 mt-4"> */}
      {/*   <Tag text="Design Services" /> */}
      {/*   <Tag text="Development Services" /> */}
      {/* </div> */}
      <div className="flex justify-center">
        <Image src="/design.svg" alt="Design" width={393} height={174} />
      </div>
    </div>
  );
};

export default DesignCard;
