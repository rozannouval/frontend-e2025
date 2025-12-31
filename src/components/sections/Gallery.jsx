"use client";

import { ParallaxScroll } from "../ui/parallax-scroll";

const images = [
  "https://placehold.co/600x400/png?text=Gallery+1",
  "https://placehold.co/400x600/png?text=Gallery+2",
  "https://placehold.co/600x600/png?text=Gallery+3",
  "https://placehold.co/400x400/png?text=Gallery+4",
  "https://placehold.co/600x400/png?text=Gallery+5",
  "https://placehold.co/400x600/png?text=Gallery+6",
  "https://placehold.co/600x400/png?text=Gallery+7",
  "https://placehold.co/400x600/png?text=Gallery+8",
  "https://placehold.co/600x600/png?text=Gallery+9",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-10 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
            Galeri Kegiatan
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Momen-momen kebersamaan kelas E2025.
          </p>
        </div>
        <ParallaxScroll images={images} />
      </div>
    </section>
  );
}
