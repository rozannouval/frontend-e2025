"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Search, Instagram, Music } from "lucide-react";

// Dummy data generator
const generateMembers = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `Member ${i + 1}`,
    role: "Mahasiswa",
    image: `https://placehold.co/300x300/png?text=Member+${i + 1}`,
    quote: "Belajar hari ini, memimpin esok hari.",
  }));
};

const members = generateMembers(12);

export default function Members() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="members" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
            Anggota Kelas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Daftar seluruh anggota kelas E2025.
          </p>

          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-muted-foreground" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-border rounded-full leading-5 bg-background placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition duration-150 ease-in-out"
              placeholder="Cari anggota..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <AnimatePresence>
            {filteredMembers.map((member) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                key={member.id}
                className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 text-center flex flex-col gap-2">
                  <div>
                    <h3 className="font-bold text-base truncate group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">{member.role}</p>
                  </div>
                  
                  {/* Social Buttons - Always Visible */}
                  <div className="flex items-center justify-center gap-3 pt-2">
                    <button className="p-2 bg-muted/50 rounded-full text-muted-foreground hover:bg-pink-100 hover:text-pink-600 dark:hover:bg-pink-900/30 transition-colors">
                      <Instagram className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-muted/50 rounded-full text-muted-foreground hover:bg-green-100 hover:text-green-600 dark:hover:bg-green-900/30 transition-colors">
                      <Music className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredMembers.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            Tidak ada anggota yang ditemukan.
          </div>
        )}
      </div>
    </section>
  );
}
