import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
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
import projectUn from "@/assets/project-un.jpg";

const tagColorMap: Record<string, string> = {
  Travel: "tag-blush",
  Hiking: "tag-dusty-blue",
  Reflections: "tag-mauve",
  Maps: "tag-dusty-blue",
  Photography: "tag-blush",
};

const articles = [
  {
    title: "Strolls Through the San Francisco Streets",
    excerpt: "Wandering through fog-laden hills, discovering quiet neighborhoods that define the city beyond the tourist trail — cable cars, steep stairways, and hidden garden parks.",
    date: "March 2026",
    tags: ["Travel"],
    image: citySF,
    featured: true,
  },
  {
    title: "Favorite Trails and Open Spaces Near Los Angeles",
    excerpt: "A curated guide to hiking trails, hidden parks, and mountain viewpoints that reveal Los Angeles beyond its urban sprawl — from Griffith Park to Malibu Creek.",
    date: "December 2025",
    tags: ["Hiking", "Travel", "Photography"],
    image: hiking,
  },
  {
    title: "Mexico City: Markets, Murals, and Morning Light",
    excerpt: "Exploring the layers of Mexico City — from the ancient footprints of Teotihuacán to the vibrant street markets of Roma Norte and the quiet beauty of Coyoacán.",
    date: "November 2025",
    tags: ["Travel", "Photography"],
    image: cityMexico,
  },
  {
    title: "Reflections from the United Nations in Beijing",
    excerpt: "On writing speeches for diplomats, navigating cross-cultural policy work, and finding meaning in the daily rhythms of international development.",
    date: "October 2025",
    tags: ["Reflections"],
    image: projectUn,
  },
  {
    title: "Beijing Through the Seasons",
    excerpt: "A year of watching the capital shift — from the frozen Houhai Lake to the pink blossoms of Yuyuantan Park, and everything the hutongs hold between.",
    date: "August 2025",
    tags: ["Travel", "Photography"],
    image: cityBeijing,
  },
  {
    title: "On Mountains and Solitude",
    excerpt: "Why hiking alone in the San Gabriel Mountains became my most consistent practice — a meditation on movement, altitude, and the view from above.",
    date: "July 2025",
    tags: ["Hiking", "Reflections"],
    image: landscape1,
  },
];

/* ── Timeline Data (2001–2026, every year) ── */
const timelineImages = [
  landscape1, landscape2, coastline, landscape1, cityBeijing, 
  landscape2, coastline, cityBeijing, landscape1, hiking,
  cityBeijing, landscape2, coastline, cityBeijing, hiking,
  landscape1, cityMexico, coastline, cityMilan, hiking,
  landscape2, cityBeijing, cityLA, citySF, portrait, portrait,
];

const timelineEntries = Array.from({ length: 26 }, (_, i) => {
  const year = 2001 + i;
  const labels: Record<number, string> = {
    2001: "Born", 2002: "First steps", 2003: "Early days", 2004: "Childhood",
    2005: "Early memories", 2006: "School begins", 2007: "Growing", 2008: "Discovery",
    2009: "Curiosity", 2010: "New chapter", 2011: "Exploration", 2012: "Middle school",
    2013: "Transitions", 2014: "Beijing", 2015: "High school", 2016: "Ambitions",
    2017: "First travels", 2018: "Broadening", 2019: "University", 2020: "Resilience",
    2021: "Adventures", 2022: "Growth", 2023: "California", 2024: "Explorations",
    2025: "Building", 2026: "Now",
  };
  const captions: Record<number, string> = {
    2001: "The beginning", 2005: "Childhood fragments", 2010: "By the water",
    2014: "Beijing years", 2017: "Discovering the world", 2019: "Milan & learning",
    2021: "Into the mountains", 2023: "Los Angeles chapter", 2024: "San Francisco walks",
    2026: "Present day",
  };
  return {
    year: String(year),
    label: labels[year] || "",
    image: timelineImages[i],
    caption: captions[year] || labels[year] || "",
  };
});

/* ── Personal Story Essays ── */
const storyTagColors: Record<string, string> = {
  memory: "tag-mauve",
  identity: "tag-blush",
  reflection: "tag-sage",
  "growing up": "tag-dusty-blue",
  nature: "tag-sage",
  language: "tag-coastal",
  cities: "tag-coastal",
  travel: "tag-blush",
};

const essays = [
  { title: "The Geography of Growing Up", excerpt: "How moving between cities shaped my sense of place — and what it means to feel 'from' somewhere when you've lived in many.", tags: ["memory", "identity"], date: "2026" },
  { title: "Letters I Never Sent", excerpt: "On the things I wanted to say at different ages — to teachers, to friends, to the version of myself that hadn't yet arrived.", tags: ["reflection", "growing up"], date: "2025" },
  { title: "What the Mountains Taught Me", excerpt: "A meditation on solitude, altitude, and why the most important conversations happen when no one else is around.", tags: ["nature", "reflection"], date: "2025" },
  { title: "Between Two Languages", excerpt: "Navigating identity through the words you choose — and the ones that choose you. On thinking in Mandarin and dreaming in English.", tags: ["identity", "language"], date: "2024" },
  { title: "Seasons in Beijing", excerpt: "A year told through sensory fragments: frozen lakes, spring blossoms, summer rain on hutong stones, and the golden light of autumn.", tags: ["memory", "cities"], date: "2024" },
  { title: "On Arriving Somewhere New", excerpt: "The strange quiet of first nights in unfamiliar cities — and the slow process of turning foreignness into familiarity.", tags: ["travel", "growing up"], date: "2023" },
];

/* ── Notes & Thinking Data ── */
const notesTagOptions = ["All", "Policy", "Finance", "Philosophy", "Cities", "Systems"];
const notesTagColors: Record<string, string> = {
  Policy: "tag-sage",
  Finance: "tag-dusty-blue",
  Philosophy: "tag-mauve",
  Cities: "tag-coastal",
  Systems: "tag-blush",
};

const notes = [
  { title: "The Case for Spatial Equity Indexes", summary: "Why composite spatial indexes — combining environmental, economic, and infrastructural data — offer a more honest picture of urban inequality than income alone.", tags: ["Policy", "Cities"], readingTime: "6 min", date: "March 2026" },
  { title: "PPP Models and the Olympic Legacy Trap", summary: "Reflections from studying Milan-Cortina 2026: how public-private partnerships in mega-events create infrastructure that cities either absorb or abandon.", tags: ["Finance", "Policy"], readingTime: "8 min", date: "February 2026" },
  { title: "Redlining as Environmental Policy", summary: "How mid-century housing discrimination became de facto environmental zoning — and why the spatial overlap between HOLC grades and pollution exposure is not coincidental.", tags: ["Policy", "Systems"], readingTime: "7 min", date: "January 2026" },
  { title: "Systems Thinking in Development Economics", summary: "Moving beyond linear causality: how feedback loops, delays, and emergent behavior shape the outcomes of international development interventions.", tags: ["Systems", "Philosophy"], readingTime: "5 min", date: "December 2025" },
  { title: "What Finance Gets Wrong About Risk", summary: "Notes on the disconnect between quantitative risk models and lived uncertainty — and why behavioral economics still hasn't bridged the gap.", tags: ["Finance", "Philosophy"], readingTime: "6 min", date: "November 2025" },
  { title: "The Quiet Politics of Urban Data", summary: "On how data collection itself is a political act — who counts, what gets measured, and the stories that census tracts can't tell.", tags: ["Cities", "Policy", "Systems"], readingTime: "7 min", date: "October 2025" },
  { title: "On Reading Across Disciplines", summary: "Why the most useful insights come from reading outside your field — and how economics, geography, and philosophy inform each other.", tags: ["Philosophy"], readingTime: "4 min", date: "September 2025" },
];

/* ── Top-level tabs ── */
const topTabs = ["All", "Personal Story", "Notes & Thinking", "Reflections"] as const;
type TopTab = typeof topTabs[number];

/* ── Timeline Item Component ── */
const TimelineItem = ({ entry, isActive, onClick }: { entry: typeof timelineEntries[0]; isActive: boolean; onClick: () => void }) => (
  <button onClick={onClick} className="flex flex-col items-center shrink-0 group cursor-pointer focus:outline-none" style={{ width: 80 }}>
    <div className={`w-2.5 h-2.5 rounded-full transition-all duration-500 mb-3 ${isActive ? "bg-primary scale-125 shadow-md" : "bg-muted-foreground/30 group-hover:bg-primary/60"}`} />
    <span className={`text-xs font-sans tracking-widest transition-colors duration-300 ${isActive ? "text-primary font-medium" : "text-muted-foreground/60"}`}>{entry.year}</span>
    <span className="text-[10px] text-muted-foreground/40 mt-0.5 font-sans">{entry.label}</span>
  </button>
);

const Journal = () => {
  const [topTab, setTopTab] = useState<TopTab>("Journal");
  const [articleTag, setArticleTag] = useState("All");
  const [notesTag, setNotesTag] = useState("All");
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  const activeTimeline = timelineEntries[activeTimelineIndex];

  // Center active dot
  useEffect(() => {
    if (!timelineRef.current) return;
    const container = timelineRef.current;
    const child = container.children[activeTimelineIndex] as HTMLElement | undefined;
    if (child) {
      const scrollLeft = child.offsetLeft - container.clientWidth / 2 + child.clientWidth / 2;
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  }, [activeTimelineIndex]);

  const filteredArticles = articleTag === "All" ? articles : articles.filter(a => a.tags.includes(articleTag));
  const featured = filteredArticles.find(a => a.featured) || filteredArticles[0];
  const rest = filteredArticles.filter(a => a !== featured);

  const filteredNotes = notesTag === "All" ? notes : notes.filter(n => n.tags.includes(notesTag));

  return (
    <Layout>
      {/* Header */}
      <section className="pt-32 pb-16 gradient-to-mauve">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-primary mb-4 block">Journal & Field Notes</span>
          <h1 className="font-editorial text-4xl md:text-6xl text-foreground mb-6">Writing & Reflections</h1>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            Travel reflections, city exploration, maps, and thoughtful observations — a space for the ideas that don't fit neatly into a resume.
          </p>
        </div>
      </section>

      {/* Top-level tabs */}
      <section className="py-6 border-b border-border sticky top-16 bg-background/90 backdrop-blur-md z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-6">
            {topTabs.map(tab => (
              <button
                key={tab}
                onClick={() => setTopTab(tab)}
                className={`text-sm font-sans px-1 py-2 transition-all ${
                  topTab === tab
                    ? "text-primary border-b-2 border-primary font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── JOURNAL TAB ─── */}
      {topTab === "Journal" && (
        <>
          {/* Sub-tags */}
          <section className="py-4 border-b border-border/50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="flex flex-wrap gap-3">
                {articleTagOptions.map(tag => (
                  <button
                    key={tag}
                    onClick={() => setArticleTag(tag)}
                    className={`text-xs font-sans px-3 py-1.5 transition-all ${
                      articleTag === tag
                        ? "text-primary border-b border-primary font-medium"
                        : "text-muted-foreground/70 hover:text-foreground"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              {/* Featured */}
              {featured && (
                <Link to="#" className="group block mb-20">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7">
                      <div className="overflow-hidden relative">
                        <img src={featured.image} alt={featured.title} className="w-full aspect-[16/10] object-cover img-hover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </div>
                    <div className="lg:col-span-4 lg:col-start-9">
                      <span className="text-xs text-muted-foreground font-sans block mb-3">{featured.date}</span>
                      <div className="flex gap-2 mb-4">
                        {featured.tags.map(t => (
                          <span key={t} className={`text-xs font-sans px-2.5 py-1 ${tagColorMap[t] || 'tag-sage'}`}>{t}</span>
                        ))}
                      </div>
                      <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4 group-hover:text-primary transition-colors leading-snug">{featured.title}</h2>
                      <p className="text-sm text-muted-foreground leading-relaxed">{featured.excerpt}</p>
                    </div>
                  </div>
                </Link>
              )}

              {/* Rest */}
              <div className="space-y-16">
                {rest.map((article, i) => {
                  if (i % 3 === 0 && rest[i + 1]) {
                    return (
                      <div key={article.title} className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <Link to="#" className="group block">
                          <div className="overflow-hidden relative mb-5">
                            <img src={article.image} alt={article.title} className="w-full aspect-[4/3] object-cover img-hover" />
                          </div>
                          <span className="text-xs text-muted-foreground font-sans block mb-2">{article.date}</span>
                          <div className="flex gap-2 mb-3">
                            {article.tags.map(t => (<span key={t} className={`text-xs font-sans px-2.5 py-1 ${tagColorMap[t] || 'tag-sage'}`}>{t}</span>))}
                          </div>
                          <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">{article.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{article.excerpt}</p>
                        </Link>
                      </div>
                    );
                  }
                  if (i > 0 && (i - 1) % 3 === 0) {
                    return (
                      <div key={article.title} className="grid grid-cols-1 md:grid-cols-2 gap-12 -mt-16">
                        <div className="hidden md:block" />
                        <Link to="#" className="group block">
                          <div className="overflow-hidden relative mb-5">
                            <img src={article.image} alt={article.title} className="w-full aspect-[4/3] object-cover img-hover" />
                          </div>
                          <span className="text-xs text-muted-foreground font-sans block mb-2">{article.date}</span>
                          <div className="flex gap-2 mb-3">
                            {article.tags.map(t => (<span key={t} className={`text-xs font-sans px-2.5 py-1 ${tagColorMap[t] || 'tag-sage'}`}>{t}</span>))}
                          </div>
                          <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">{article.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{article.excerpt}</p>
                        </Link>
                      </div>
                    );
                  }
                  return (
                    <Link to="#" key={article.title} className="group flex flex-col md:flex-row gap-6 items-start py-8 border-t border-border">
                      <div className="w-full md:w-64 shrink-0 overflow-hidden">
                        <img src={article.image} alt={article.title} className="w-full aspect-[4/3] object-cover img-hover" />
                      </div>
                      <div className="flex-1">
                        <span className="text-xs text-muted-foreground font-sans block mb-2">{article.date}</span>
                        <div className="flex gap-2 mb-3">
                          {article.tags.map(t => (<span key={t} className={`text-xs font-sans px-2.5 py-1 ${tagColorMap[t] || 'tag-sage'}`}>{t}</span>))}
                        </div>
                        <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">{article.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{article.excerpt}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        </>
      )}

      {/* ─── PERSONAL STORY TAB ─── */}
      {topTab === "Personal Story" && (
        <>
          {/* Timeline */}
          <section className="py-16 border-b border-border relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              {/* Featured image */}
              <div className="relative mb-12">
                <div className="relative w-full max-w-4xl mx-auto overflow-hidden" style={{ aspectRatio: "21/9" }}>
                  {timelineEntries.map((entry, i) => (
                    <img
                      key={entry.year}
                      src={entry.image}
                      alt={entry.caption}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                        i === activeTimelineIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
                      }`}
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-foreground/10 pointer-events-none" />
                  <div className="absolute bottom-6 left-8 z-10">
                    <p className="text-sm font-sans text-white/80 tracking-wide">{activeTimeline.caption}</p>
                    <p className="text-xs text-white/50 mt-1 font-sans">{activeTimeline.year} · {activeTimeline.label}</p>
                  </div>
                </div>
              </div>

              {/* Timeline bar */}
              <div className="relative">
                <div className="absolute top-[5px] left-0 right-0 h-px bg-border" />
                <div
                  ref={timelineRef}
                  className="flex gap-1 overflow-x-auto scrollbar-hide py-1 px-4"
                  style={{ scrollbarWidth: "none" }}
                >
                  {timelineEntries.map((entry, i) => (
                    <TimelineItem key={entry.year} entry={entry} isActive={i === activeTimelineIndex} onClick={() => setActiveTimelineIndex(i)} />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Essays */}
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <span className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-primary mb-4 block">Reflections</span>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-12">Fragments & Essays</h2>
              <div className="space-y-12">
                {essays.map(essay => (
                  <article key={essay.title} className="group border-t border-border pt-8 cursor-pointer">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs text-muted-foreground/60 font-sans">{essay.date}</span>
                      {essay.tags.map(t => (
                        <span key={t} className={`text-xs font-sans px-2.5 py-1 ${storyTagColors[t] || "tag-sage"}`}>{t}</span>
                      ))}
                    </div>
                    <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">{essay.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">{essay.excerpt}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* ─── NOTES & THINKING TAB ─── */}
      {topTab === "Notes & Thinking" && (
        <>
          {/* Sub-tags */}
          <section className="py-4 border-b border-border/50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="flex flex-wrap gap-3">
                {notesTagOptions.map(tag => (
                  <button
                    key={tag}
                    onClick={() => setNotesTag(tag)}
                    className={`text-xs font-sans px-3 py-1.5 transition-all ${
                      notesTag === tag
                        ? "text-primary border-b border-primary font-medium"
                        : "text-muted-foreground/70 hover:text-foreground"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Notes list */}
          <section className="py-20">
            <div className="max-w-3xl mx-auto px-6 lg:px-8">
              <div className="space-y-0">
                {filteredNotes.map(note => (
                  <article key={note.title} className="group border-t border-border py-10 cursor-pointer">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <span className="text-xs text-muted-foreground/60 font-sans">{note.date}</span>
                      <span className="text-xs text-muted-foreground/40 font-sans">· {note.readingTime} read</span>
                      {note.tags.map(t => (
                        <span key={t} className={`text-xs font-sans px-2.5 py-1 ${notesTagColors[t] || "tag-sage"}`}>{t}</span>
                      ))}
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">{note.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{note.summary}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </Layout>
  );
};

export default Journal;
