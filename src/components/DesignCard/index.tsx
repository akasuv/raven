import Image from "next/image";
import Tag from "@/components/Tag";
import FilterBackground from "@/components/FilterBackground";

const DesignCard = () => (
  <div className="relative w-full h-[376px] pl-[90px] py-2.5 flex justify-between items-center gap-x-24 ">
    <div className="z-10">
      <p className="text-white mb-2.5">Our Services</p>
      <p className="text-[#989898]">
        lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum
        dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
      </p>
      <div className="flex gap-x-2.5 mt-4">
        <Tag text="Design Services" />
        <Tag text="Development Services" />
      </div>
    </div>
    <FilterBackground />
  </div>
);

export default DesignCard;
