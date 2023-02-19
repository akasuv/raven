import ServiceCard from "@/components/ServiceCard";
import DesignCard from "@/components/DesignCard";
import DevelopmentCard from "@/components/DevelopmentCard";

const Introduction = () => (
  <div className="w-[1174px] mx-auto bg-gradient-to-r from-black via-[rgba(87,87,87,1)] to-black">
    <ServiceCard />
    <div className="flex mt-2.5 gap-x-2.5">
      <div className="w-1/2">
        <DesignCard />
      </div>
      <div className="w-1/2">
        <DevelopmentCard />
      </div>
    </div>
  </div>
);

export default Introduction;
