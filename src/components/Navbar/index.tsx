import Image from "next/image";

const Navbar = () => (
  <nav className="py-4 px-12 flex items-center justify-between">
    <div className="flex gap-x-5 items-center">
      <Image src="/logo.svg" alt="Raven" width={36} height={36} />
      <p className="text-white font-bold">Raven Studio</p>
    </div>
    <ul className="text-[#989898]">
      <li>Twitter</li>
    </ul>
  </nav>
);

export default Navbar;
