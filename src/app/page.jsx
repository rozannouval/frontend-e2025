import Image from "next/image";

export default function Home() {
  return (
    <main className="py-24 flex">
      <section className="flex justify-between items-center gap-12 p-4">
        <div>
          <h1 className="text-4xl font-bold mb-2">E2025</h1>
          <h1 className="text-4xl bg-black text-white p-4 font-semibold">
            <span className="border-b-3 border-yellow-500">STMIK MARDIRA INDONESIA</span>
          </h1>
        </div>
      </section>
    </main>
  );
}
