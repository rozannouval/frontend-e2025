"use client";

import { motion } from "framer-motion";
import { Vortex } from "../ui/vortex";

export default function Hero() {
  return (
    <div className="w-full mx-auto h-[100svh] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex flex-col gap-4 items-center justify-center text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-7xl font-bold text-white font-heading tracking-tight">
            Welcome to E2025
          </h1>
          <p className="font-light text-lg md:text-2xl text-neutral-200 py-4 max-w-2xl">
            The Future of STMIK Mardira Indonesia. <br />
            Solidaritas Tanpa Batas, Prestasi Tiada Henti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button className="bg-white text-black rounded-full px-8 py-3 font-semibold hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.5)]">
              Explore Class
            </button>
            <button className="bg-transparent border border-white text-white rounded-full px-8 py-3 font-semibold hover:bg-white/10 transition-colors">
              Contact Us
            </button>
          </div>
        </motion.div>
      </Vortex>
    </div>
  );
}
