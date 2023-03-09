import Button from "@/components/Button";

const Contact = () => (
  <div className="pt-[100px] md:pt-[140px] flex flex-col items-center gap-y-[35px] pb-[146px] px-[56px]">
    <p className="text-[rgba(250,250,250,0.95)] text-[28px] text-center w-[480px] max-w-full">
      Work with us and see your ideas soar to new heights.
    </p>
    <Button>
      <a href="mailto:hello@ravenstudio.sh">Contact Us</a>
    </Button>
  </div>
);

export default Contact;
