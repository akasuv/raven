import Image from "next/image";
import Tag from "@/components/Tag";
import FilterBackground from "@/components/FilterBackground";
import { LangContext } from "@/context";
import React from "react";

const DevelopmentCard = () => {
  const lang = React.useContext(LangContext);

  const title = {
    en: "Develop",
    cn: "研发",
  };
  const description = {
    en: `Passion is craved in us. By keeping up with the latest trends and advances
      within the field of technology, we're confident that we can bring the best
      solutions to you. We want to make sure you have access to the latest and
      greatest technologies that help them stay ahead of the competition.`,
    cn: `我们从不会错过最新技术，但我们不仅仅是新玩具的玩家，通过跟上技术领域的最新趋势和进步，我们相信可以为您提供最好的解决方案, 确保您能够获得最前沿、最优秀的技术，从而保持竞争优势。`,
  };
  return (
    <div
      className="relative w-full p-[30px]  md:pt-[35px] pb-0 md:pb-0
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
    gap-y-[30px]
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
        <Image src="/code.svg" alt="Design" width={393} height={174} />
      </div>
    </div>
  );
};

export default DevelopmentCard;
