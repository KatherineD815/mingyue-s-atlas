import { useState, useRef, useEffect } from "react";
import Layout from "@/components/Layout";
import cityBeijing from "@/assets/city-beijing.jpg";
import cityMexico from "@/assets/city-mexico.jpg";
import cityMilan from "@/assets/city-milan.jpg";
import citySF from "@/assets/city-sf.jpg";
import cityLA from "@/assets/city-la.jpg";
import hiking from "@/assets/hiking.jpg";
import landscape1 from "@/assets/landscape-1.jpg";
import landscape2 from "@/assets/landscape-2.jpg";
import coastline from "@/assets/coastline.jpg";
import portrait from "@/assets/portrait.jpg";

/* ── Timeline Data ── */
const timelineEntries = [
  { year: "2001", label: "Born", image: landscape1, caption: "The beginning" },
  { year: "2005", label: "Early memories", image: landscape2, caption: "Childhood fragments" },
  { year: "2010", label: "Growing up", image: coastline, caption: "By the water" },
  { year: "2014", label: "New horizons", image: cityBeijing, caption: "Beijing years" },
  { year: "2017", label: "First travels", image: cityMexico, caption: "Discovering the world" },
  { year: "2019", label: "University", image: cityMilan, caption: "Milan & learning" },
  { year: "2021", label: "Adventures", image: hiking, caption: "Into the mountains" },
  { year: "2023", label: "California", image: cityLA, caption: "Los Angeles chapter" },
  { year: "2024", label: "Explorations", image: citySF, caption: "San Francisco walks" },
  { year: "2026", label: "Now", image: portrait, caption: "Present day" },
];

/* ── Essay Data ── */
const essays = [
  {
    title: "The Geography of Growing Up",
    excerpt: "How moving between cities shaped my sense of place — and what it means to feel 'from' somewhere when you've lived in many.",
    tags: ["memory", "identity"],
    date: "2026",
  },
  {
    title: "Letters I Never Sent",
    excerpt: "On the things I wanted to say at different ages — to teachers, to friends, to the version of myself that hadn't yet arrived.",
    tags: ["reflection", "growing up"],
    date: "2025",
  },
  {
    title: "What the Mountains Taught Me",
    excerpt: "A meditation on solitude, altitude, and why the most important conversations happen when no one else is around.",
    tags: ["nature", "reflection"],
    date: "2025",
  },
  {
    title: "Between Two Languages",
    excerpt: "Navigating identity through the words you choose — and the ones that choose you. On thinking in Mandarin and dreaming in English.",
    tags: ["identity", "language"],
    date: "2024",
  },
  {
    title: "Seasons in Beijing",
    excerpt: "A year told through sensory fragments: frozen lakes, spring blossoms, summer rain on hutong stones, and the golden light of autumn.",
    tags: ["memory", "cities"],
    date: "2024",
  },
  {
    title: "On Arriving Somewhere New",
    excerpt: "The strange quiet of first nights in unfamiliar cities — and the slow process of turning foreignness into familiarity.",
    tags: ["travel", "growing up"],
    date: "2023",
  },
];

const tagColors: Record<string, string> = {
  memory: "tag-mauve",
  identity: "tag-blush",
  reflection: "tag-sage",
  "growing up": "tag-dusty-blue",
  nature: "tag-sage",
  language: "tag-coastal",
  cities: "tag-coastal",
  travel: "tag-blush",
};

/* ── Timeline Item ── */
const TimelineItem = ({
  entry,
  isActive,
  onClick,
}: {
  entry: (typeof timelineEntries)[0];
  isActive: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="flex flex-col items-center shrink-0 group cursor-pointer focus:outline-none"
    style={{ width: 120 }}
  >
    {/* Dot */}
    <div
      className={`w-2.5 h-2.5 rounded-full transition-all duration-500 mb-3 ${
        isActive
          ? "bg-primary scale-125 shadow-md"
          : "bg-muted-foreground/30 group-hover:bg-primary/60"
      }`}
    />
    {/* Year */}
    <span
      className={`text-xs font-sans tracking-widest transition-colors duration-300 ${
        isActive ? "text-primary font-medium" : "text-muted-foreground/60"
      }`}
    >
      {entry.year}
    </span>
    {/* Label */}
    <span className="text-[10px] text-muted-foreground/40 mt-0.5 font-sans">
      {entry.label}
    </span>
  </button>
);

const PersonalStory = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const active = timelineEntries[activeIndex];

  // Center active dot in scroll
  useEffect(() => {
    if (!timelineRef.current) return;
    const container = timelineRef.current;
    const child = container.children[activeIndex] as HTMLElement | undefined;
    if (child) {
      const scrollLeft =
        child.offsetLeft - container.clientWidth / 2 + child.clientWidth / 2;
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  }, [activeIndex]);

  return (
    <Layout>
      {/* ── Header ── */}
      <section className="pt-32 pb-12 gradient-to-mauve">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-primary mb-4 block">
            Personal Archive
          </span>
          <h1 className="font-editorial text-4xl md:text-6xl text-foreground mb-6">
            Personal Story
          </h1>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            A visual and narrative archive — fragments of memory, place, and becoming.
          </p>
        </div>
      </section>

      {/* ── Timeline Section ── */}
      <section className="py-16 border-b border-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Featured image — cinematic */}
          <div className="relative mb-12">
            <div className="relative w-full max-w-4xl mx-auto overflow-hidden" style={{ aspectRatio: "21/9" }}>
              {timelineEntries.map((entry, i) => (
                <img
                  key={entry.year}
                  src={entry.image}
                  alt={entry.caption}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                    i === activeIndex
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-105"
                  }`}
                />
              ))}
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-foreground/10 pointer-events-none" />
              {/* Caption */}
              <div className="absolute bottom-6 left-8 z-10">
                <p className="text-sm font-sans text-white/80 tracking-wide">
                  {active.caption}
                </p>
                <p className="text-xs text-white/50 mt-1 font-sans">
                  {active.year} · {active.label}
                </p>
              </div>
            </div>
          </div>

          {/* Timeline bar */}
          <div className="relative">
            {/* Line */}
            <div className="absolute top-[5px] left-0 right-0 h-px bg-border" />
            {/* Scrollable dots */}
            <div
              ref={timelineRef}
              className="flex gap-2 overflow-x-auto scrollbar-hide py-1 px-4"
              style={{ scrollbarWidth: "none" }}
            >
              {timelineEntries.map((entry, i) => (
                <TimelineItem
                  key={entry.year}
                  entry={entry}
                  isActive={i === activeIndex}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Essays Section ── */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <span className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-primary mb-4 block">
            Reflections
          </span>
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-12">
            Fragments & Essays
          </h2>

          <div className="space-y-12">
            {essays.map((essay) => (
              <article
                key={essay.title}
                className="group border-t border-border pt-8 cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs text-muted-foreground/60 font-sans">
                    {essay.date}
                  </span>
                  {essay.tags.map((t) => (
                    <span
                      key={t}
                      className={`text-xs font-sans px-2.5 py-1 ${
                        tagColors[t] || "tag-sage"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                  {essay.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                  {essay.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PersonalStory;
