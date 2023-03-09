import ServiceCard from "@/components/ServiceCard";
import DesignCard from "@/components/DesignCard";
import DevelopmentCard from "@/components/DevelopmentCard";

const Introduction = () => (
  <div className="max-w-[1174px] min-h-[850px] mx-auto bg-gradient-to-r from-black via-[rgba(87,87,87,1)] to-black relative pt-12 md:pt-24 px-[20px] md:px-[45px] ">
    <div className="bg-[url('/noise.svg')] bg-no-repeat w-full h-full absolute top-0 left-0 z-0" />
    <div className="z-10">
      <div className="flex justify-center pb-[30px] md:pb-[60px]">
        <p className="font-sans text-white border border-[rgba(250,250,250,0.45)] bg-[rgba(255,255,255,.1)] px-[20px] py-[10px] rounded-[35px]">
          {"Design -> Development -> Delivery"}
        </p>
      </div>
      <div className="flex mt-2.5 gap-2.5 flex-col md:flex-row mb-2.5">
        <div className="md:w-1/2">
          <DesignCard />
        </div>
        <div className="md:w-1/2">
          <DevelopmentCard />
        </div>
      </div>
      <ServiceCard />
    </div>
  </div>
);

export default Introduction;
