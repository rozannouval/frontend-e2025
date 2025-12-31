"use client";

import { motion } from "framer-motion";
import { Users, Calendar, GraduationCap, Award } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  {
    title: "Total Anggota",
    description: "40+ Mahasiswa Aktif",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 items-center justify-center"><Users className="w-12 h-12 text-neutral-500" /></div>,
    className: "md:col-span-2",
    icon: <Users className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Tahun Angkatan",
    description: "2025",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 items-center justify-center"><Calendar className="w-12 h-12 text-neutral-500" /></div>,
    className: "md:col-span-1",
    icon: <Calendar className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Jurusan",
    description: "Teknik Informatika",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 items-center justify-center"><GraduationCap className="w-12 h-12 text-neutral-500" /></div>,
    className: "md:col-span-1",
    icon: <GraduationCap className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Prestasi",
    description: "Juara Umum Classmeeting",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 items-center justify-center"><Award className="w-12 h-12 text-neutral-500" /></div>,
    className: "md:col-span-2",
    icon: <Award className="h-4 w-4 text-neutral-500" />,
  },
];

const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
            Tentang E2025
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Informasi singkat mengenai kelas kami.
          </p>
        </div>
        <BentoGrid className="max-w-4xl mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={item.className}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
