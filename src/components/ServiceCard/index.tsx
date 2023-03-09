import Image from "next/image";
import Tag from "@/components/Tag";

const ServiceCard = () => (
  <div
    className="relative max-w-full h-[583px] md:h-[376px] p-[35px]  flex flex-col md:flex-row justify-between items-center gap-x-24 
    drop-shadow-[0_2px_9px_rgba(0,0,0,0.25)]
    border-[0.8px] border-[rgba(152,152,152,0.3)]
    rounded-3xl
    overflow-hidden
    bg-[rgba(217,217,217,0.08)]
    backdrop-blur-3xl
    gap-y-[45px]
  "
  >
    <div className="z-10 md:pl-[55px]">
      <p className="text-white mb-2.5">Deliever</p>
      <p className="text-[#989898]">
        Time and quality are what we provide, we value yours as we value our
        own. With us, you can approve your ideas so quickly that like you’re the
        engineer yourself, you’re the brain and we’re the hands.
      </p>
      {/* <div className="flex gap-x-2.5 mt-4"> */}
      {/*   <Tag text="Design Services" /> */}
      {/*   <Tag text="Development Services" /> */}
      {/* </div> */}
    </div>
    <div className="md:w-[500px] w-full md:h-[327px] relative grow shrink-0">
      <Image
        className="z-10 rounded-2xl hidden md:block"
        src="/deliver.png"
        alt="Service Card"
        fill
      />
      <Image
        className="z-10 rounded-2xl md:hidden"
        src="/deliver-mobile.png"
        alt="Service Card"
        fill
        objectFit="contain"
      />
    </div>
  </div>
);

export default ServiceCard;
