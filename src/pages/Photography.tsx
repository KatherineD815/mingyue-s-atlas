import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import cityLA from "@/assets/city-la.jpg";
import cityBeijing from "@/assets/city-beijing.jpg";
import cityMexico from "@/assets/city-mexico.jpg";
import cityNewYork from "@/assets/city-newyork.jpg";
import citySF from "@/assets/city-sf.jpg";
import cityMilan from "@/assets/city-milan.jpg";
import hiking from "@/assets/hiking.jpg";
import landscape1 from "@/assets/landscape-1.jpg";
import landscape2 from "@/assets/landscape-2.jpg";
import street1 from "@/assets/street-1.jpg";
import coastline from "@/assets/coastline.jpg";
import portrait from "@/assets/portrait.jpg";

const categories = ["All", "Travel", "Cities", "Landscapes", "Street Moments"];

const photos = [
  { src: heroBg, alt: "Coastal city aerial", category: "Cities" },
  { src: landscape1, alt: "Mountain lake sunset", category: "Landscapes" },
  { src: cityLA, alt: "Los Angeles neighborhoods", category: "Cities" },
  { src: hiking, alt: "Misty mountain trail", category: "Landscapes" },
  { src: cityBeijing, alt: "Beijing temples and skyline", category: "Cities" },
  { src: street1, alt: "European alley with flowers", category: "Street Moments" },
  { src: cityMexico, alt: "Mexico City street scene", category: "Travel" },
  { src: landscape2, alt: "Coastal cliffs at sunset", category: "Landscapes" },
  { src: citySF, alt: "San Francisco street", category: "Cities" },
  { src: cityNewYork, alt: "New York skyline", category: "Cities" },
  { src: cityMilan, alt: "Milan architecture", category: "Travel" },
  { src: portrait, alt: "Portrait", category: "Street Moments" },
];

const Photography = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeCategory === "All" ? photos : photos.filter((p) => p.category === activeCategory);

  const navigateLightbox = (dir: number) => {
    if (lightbox === null) return;
    setLightbox((lightbox + dir + filtered.length) % filtered.length);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-end pb-16">
        <div className="absolute inset-0">
          <img src={landscape1} alt="Photography" width={1920} height={1080} className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <span className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-primary mb-4 block">Photography</span>
          <h1 className="font-editorial text-4xl md:text-6xl text-foreground mb-4">Visual Stories</h1>
          <p className="text-muted-foreground leading-relaxed max-w-xl">
            Moments captured across continents — travel, cities, landscapes, and the quiet details in between.
          </p>
        </div>
      </section>

      {/* Category filters — sticky */}
      <section className="py-6 border-b border-border sticky top-16 bg-background/90 backdrop-blur-md z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm font-sans px-4 py-2 transition-all ${
                  activeCategory === cat
                    ? "text-primary border-b-2 border-primary font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((photo, i) => (
              <div
                key={i}
                className="break-inside-avoid cursor-pointer group"
                onClick={() => setLightbox(i)}
              >
                <div className="overflow-hidden relative">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="w-full object-cover img-hover"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
                </div>
              </div>
            ))}
          </div>

          {/* Timeline teaser */}
          <div className="mt-28 text-center">
            <div className="inline-block editorial-quote text-left max-w-lg">
              <p className="font-editorial text-xl text-foreground italic leading-relaxed mb-2">
                Personal Timeline — Coming Soon
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A visual timeline from age 0–24, tracing the places, moments, and growth that shaped who I am today.
                A chronological photo diary with year-by-year filtering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={28} />
          </button>
          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
          >
            <ChevronLeft size={36} />
          </button>
          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
          >
            <ChevronRight size={36} />
          </button>
          <img
            src={filtered[lightbox]?.src}
            alt={filtered[lightbox]?.alt}
            className="max-w-full max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-6 text-center text-primary-foreground/50 text-xs font-sans">
            {lightbox + 1} / {filtered.length}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Photography;
