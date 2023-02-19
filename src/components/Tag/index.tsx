type TagProps = {
  text: string;
};
const Tag = ({ text }: TagProps) => (
  <p className="text-white bg-[#494949E5] rounded-[20px] shadow-[0px 2px 4px rgba(0, 0, 0, 0.15)] text-xs py-2 px-3.5">
    {text}
  </p>
);

export default Tag;
