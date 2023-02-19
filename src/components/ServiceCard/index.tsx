import Image from "next/image";
import Tag from "@/components/Tag";
import FilterBackground from "@/components/FilterBackground";

const ServiceCard = () => (
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
    <div className="w-[570px] h-[356px] relative shrink-0">
      <Image
        className="z-10 rounded-2xl"
        src="https://images.unsplash.com/photo-1675263768286-99759c1e5a9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2060&q=80"
        alt="Service Card"
        fill
      />
    </div>
    <FilterBackground />
  </div>
);

export default ServiceCard;
