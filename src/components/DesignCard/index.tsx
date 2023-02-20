import Image from "next/image";
import Tag from "@/components/Tag";

const DesignCard = () => (
  <div
    className="relative w-full  pt-[30px] p-[14px] pb-0 md:pl-[90px]  md:pt-[35px] 
    drop-shadow-[0_2px_9px_rgba(0,0,0,0.25)]
    border-[0.8px] border-[rgba(152,152,152,0.3)]
    rounded-3xl
    overflow-hidden
    bg-[rgba(217,217,217,0.08)]
    backdrop-blur-3xl
  "
  >
    <p className="text-white mb-2.5">Our Services</p>
    <p className="text-[#989898]">
      lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor
      sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet,
      consectetur adipiscing elit.
    </p>
    <div className="flex gap-x-2.5 mt-4">
      <Tag text="Design Services" />
      <Tag text="Development Services" />
    </div>
    <div className="flex justify-center pt-[50px]">
      <Image src="/design.svg" alt="Design" width={393} height={174} />
    </div>
  </div>
);

export default DesignCard;
