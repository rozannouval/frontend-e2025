import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="py-24">
      <section className="container mx-auto flex justify-between items-center gap-4 p-4">
        <div className="w-1/2 flex flex-col items-start">
          <h1 className="text-4xl font-bold mb-2">E2025 PART OF</h1>
          <Link
            href={"https://stmik-mi.ac.id/"}
            target="_blank"
            className="text-4xl bg-black dark:bg-white dark:text-black text-white p-4 font-semibold"
          >
            <span className="border-b-3 border-yellow-500 flex">
              STMIK MARDIRA INDONESIA
              <ArrowUpRight />
            </span>
          </Link>
        </div>
        <div className="w-1/2">
          <h1 className="font-bold text-3xl mb-2">Apa itu E2025?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae rerum
            maxime voluptate vel neque, nihil delectus numquam pariatur odio
            provident aspernatur fuga quod, necessitatibus asperiores! At rem
            incidunt commodi recusandae?
          </p>
        </div>
      </section>
    </main>
  );
}
