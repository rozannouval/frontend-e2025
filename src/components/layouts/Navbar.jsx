import Link from "next/link";

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
    <div className="fixed w-full p-4">
      <nav className="flex justify-between items-center p-4 border-2 border-zinc-300 rounded-lg light:text-zinc-500">
        <Link href={"/"} className="font-bold">
          E2025 IF
        </Link>
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <li key={item.name}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
