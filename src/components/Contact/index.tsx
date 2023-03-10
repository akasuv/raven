import Button from "@/components/Button";
import { LangContext } from "@/context";
import React from "react";

const Contact = () => {
  const lang = React.useContext(LangContext);
  const title = {
    en: "Work with us and see your ideas soar to new heights.",
    cn: "一起合作，见证新的高度",
  };

  const contactText = {
    en: "Contact Us",
    cn: "联系我们",
  };

  return (
    <div className="pt-[100px] md:pt-[140px] flex flex-col items-center gap-y-[35px] pb-[146px] px-[56px]">
      <p className="text-[rgba(250,250,250,0.95)] text-[28px] text-center w-[480px] max-w-full">
        {title[lang]}
      </p>
      <Button>
        <a href="mailto:hello@ravenstudio.sh">{contactText[lang]}</a>
      </Button>
    </div>
  );
};

export default Contact;
