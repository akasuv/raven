import Image from "next/image";
import Tag from "@/components/Tag";
import FilterBackground from "@/components/FilterBackground";

const DevelopmentCard = () => (
  <div
    className="relative w-full p-[30px]  md:pt-[35px]
        drop-shadow-[0_2px_9px_rgba(0,0,0,0.25)]
    border-[0.8px] border-[rgba(152,152,152,0.3)]
    rounded-3xl
    overflow-hidden
    bg-[rgba(217,217,217,0.08)]
    backdrop-blur-3xl
    h-[390px]
    relative
  "
  >
    <p className="text-white mb-2.5">Develop</p>
    <p className="text-[#989898]">
      Passion is craved in us. By keeping up with the latest trends and advances
      within the field of technology, we're confident that we can bring the best
      solutions to you. We want to make sure you have access to the latest and
      greatest technologies that help them stay ahead of the competition.
    </p>
    {/* <div className="flex gap-x-2.5 mt-4"> */}
    {/*   <Tag text="Design Services" /> */}
    {/*   <Tag text="Development Services" /> */}
    {/* </div> */}
    <div className="flex justify-center pt-[50px] absolute bottom-0">
      <Image src="/code.svg" alt="Design" width={393} height={174} />
    </div>
  </div>
);

export default DevelopmentCard;
