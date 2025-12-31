import Link from "next/link";
import { ModeToggle } from "../theming/mode-toggle";
import Image from "next/image";

const navLinks = [
  {
    name: "Beranda",
    href: "/",
  },
  {
    name: "Tentang Kami",
    href: "/about",
  },
  {
    name: "Struktur Kelas",
    href: "/structure",
  },
  {
    name: "Galeri",
    href: "/gallery",
  },
];

const Navbar = () => {
  return (
    <div className="fixed w-full">
      <nav className="flex justify-between items-center py-4 px-4 border-b-2 border-zinc-300 light:text-zinc-500">
        <Link href={"/"} className="font-bold flex items-center gap-2 text-blue-500 text-xl">
          <Image src={'/images/logo/E2025.png'} alt="logo" width={40} height={40} />
          E2025 - IF
        </Link>
        <ul className="hidden md:flex items-center gap-8 font-medium">
          {navLinks.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="hover:text-blue-500 transition-all duration-300">{item.name}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <ModeToggle />
          <Link href={"/login"} className="py-1 px-4 rounded-md border-1">Login</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
