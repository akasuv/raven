import Image from "next/image";

const Navbar = () => (
  <nav className="py-4 px-5 md:px-10 lg:px-12 flex items-center justify-between">
    <a href="/" className="flex gap-x-5 items-center">
      <Image src="/logo.png" alt="Raven" width={36} height={36} />
      <p className="text-white font-bold">Raven Studio</p>
    </a>
    <ul className="text-[#989898] flex gap-x-8">
      <li>
        <a href="/cn">中文</a>
      </li>
      <li>
        <a href="https://twitter.com/ravenstudio_sh">Twitter</a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
