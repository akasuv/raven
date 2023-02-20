"use client";
type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

const Button = ({ children, onClick = () => null }: ButtonProps) => (
  <button
    onClick={onClick}
    className="relative bg-[#1D1D22] text-[14px] text-[rgba(250,250,250,0.8)] font-medium py-2.5 px-4 border-[0.8px] border-[rgba(217,217,217,0.25)] rounded-md"
  >
    {children}
    <span className="w-[76px] border-[7.5px] border-[rgba(250,250,250,0.5)] blur-[16.5px] absolute bottom-0 left-1/2 -translate-x-1/2" />
  </button>
);

export default Button;
