import ServiceCard from "@/components/ServiceCard";
import DesignCard from "@/components/DesignCard";
import DevelopmentCard from "@/components/DevelopmentCard";

const Introduction = () => (
  <div className="max-w-[1174px] min-h-[850px] mx-auto bg-gradient-to-r from-black via-[rgba(87,87,87,1)] to-black relative pt-24 px-[20px] md:px-[45px] ">
    <div className="bg-[url('/noise.svg')] bg-no-repeat w-full h-full absolute top-0 left-0 z-0" />
    <div className="z-10">
      <ServiceCard />
      <div className="flex mt-2.5 gap-2.5 flex-col md:flex-row">
        <div className="md:w-1/2">
          <DesignCard />
        </div>
        <div className="md:w-1/2">
          <DevelopmentCard />
        </div>
      </div>
    </div>
  </div>
);

export default Introduction;
