import Image from "next/image";
import Tag from "@/components/Tag";

const DesignCard = () => (
  <div
    className="relative w-full  p-[30px]   md:p-[35px] 
    h-[340px]
    md:h-[390px]
    drop-shadow-[0_2px_9px_rgba(0,0,0,0.25)]
    border-[0.8px] border-[rgba(152,152,152,0.3)]
    rounded-3xl
    overflow-hidden
    bg-[rgba(217,217,217,0.08)]
    backdrop-blur-3xl
    relative
  "
  >
    <p className="text-white mb-2.5">Design</p>
    <p className="text-[#989898]">
      {`Creativity is flowing in our genes. We're not just designing for visual
      appeal, but for expressing our aesthetic as digital-age artists.`}
    </p>
    {/* <div className="flex gap-x-2.5 mt-4"> */}
    {/*   <Tag text="Design Services" /> */}
    {/*   <Tag text="Development Services" /> */}
    {/* </div> */}
    <div className="flex justify-center absolute bottom-0">
      <Image src="/design.svg" alt="Design" width={393} height={174} />
    </div>
  </div>
);

export default DesignCard;
