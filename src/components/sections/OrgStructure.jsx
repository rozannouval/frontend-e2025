"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const structure = [
  {
    role: "Ketua Kelas",
    name: "Rozan Nouval",
    image: "https://placehold.co/300x300/png?text=Ketua",
  },
  {
    role: "Wakil Ketua",
    name: "Janice",
    image: "https://placehold.co/300x300/png?text=Wakil",
  },
  {
    role: "Sekretaris",
    name: "Devina",
    image: "https://placehold.co/300x300/png?text=Sekretaris+1",
  },
  {
    role: "Bendahara",
    name: "Raisha",
    image: "https://placehold.co/300x300/png?text=Bendahara+1",
  },
];

const OrgCard = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="relative aspect-square">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="font-bold text-lg">{member.name}</h3>
        <p className="text-sm text-muted-foreground">{member.role}</p>
      </div>
    </motion.div>
  );
};

export default function OrgStructure() {
  return (
    <section id="structure" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
            Struktur Organisasi
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Orang-orang hebat dibalik berjalannya kelas E2025.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {structure.map((member, index) => (
            <OrgCard key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
