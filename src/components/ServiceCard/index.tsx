import Image from "next/image";
import Tag from "@/components/Tag";

const ServiceCard = () => (
  <div
    className="relative max-w-full h-[583px] md:h-[376px] p-[14px] pt-[30px] lg:pl-[90px] py-2.5 flex flex-col md:flex-row justify-between items-center gap-x-24 pr-2.5
    drop-shadow-[0_2px_9px_rgba(0,0,0,0.25)]
    border-[0.8px] border-[rgba(152,152,152,0.3)]
    rounded-3xl
    overflow-hidden
    bg-[rgba(217,217,217,0.08)]
    backdrop-blur-3xl
    gap-y-[45px]
  "
  >
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
    <div className="lg:w-[570px] w-[346px] h-[327px] md:h-[356px] relative grow shrink-0">
      <Image
        className="z-10 rounded-2xl"
        src="https://images.unsplash.com/photo-1675263768286-99759c1e5a9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2060&q=80"
        alt="Service Card"
        fill
      />
    </div>
  </div>
);

export default ServiceCard;
