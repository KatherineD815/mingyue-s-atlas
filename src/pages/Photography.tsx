import { useState } from "react";
import { X } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
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
import heroBg from "@/assets/hero-bg.jpg";
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

  return (
    <Layout>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            label="Photography"
            title="Visual Stories"
            description="A curated gallery of travel, city, and landscape photography — moments captured across continents that inform how I see the world."
          />

          {/* Category filters */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm font-sans px-4 py-2 rounded-full transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry-style grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((photo, i) => (
              <div
                key={i}
                className="break-inside-avoid cursor-pointer group"
                onClick={() => setLightbox(i)}
              >
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="w-full object-cover img-hover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Timeline teaser */}
          <div className="mt-24 py-16 bg-blush rounded-lg text-center px-6">
            <h3 className="font-serif text-2xl text-foreground mb-4">Personal Timeline</h3>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Coming soon: a visual timeline from age 0–24, tracing the places, moments, and growth that shaped who I am today. 
              A chronological photo diary with year-by-year filtering.
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={32} />
          </button>
          <img
            src={filtered[lightbox]?.src}
            alt={filtered[lightbox]?.alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      )}
    </Layout>
  );
};

export default Photography;
