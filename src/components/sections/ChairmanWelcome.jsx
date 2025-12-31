"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ChairmanWelcome() {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://placehold.co/400x500/png?text=Chairman+Photo"
                alt="Chairman of E2025"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-xl font-bold">Nama Ketua</h3>
                <p className="text-white/80">Ketua Kelas E2025</p>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/2 space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground">
              Sambutan Ketua Kelas
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              "Assalamualaikum Wr. Wb. Selamat datang di website resmi kelas E2025.
              Website ini dibuat sebagai sarana informasi dan komunikasi bagi seluruh
              anggota kelas serta untuk memperkenalkan identitas kami sebagai bagian
              dari keluarga besar STMIK Mardira Indonesia. Mari kita jaga kekompakan
              dan semangat belajar untuk masa depan yang gemilang."
            </p>
            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
              "Jika kamu tidak tahan dengan lelah nya belajar, maka kamu harus menahan perihnya kebodohan"
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
