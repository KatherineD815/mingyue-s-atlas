import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import journalCover from "@/assets/journal-cover.jpg";
import cityLA from "@/assets/city-la.jpg";
import cityBeijing from "@/assets/city-beijing.jpg";
import cityMexico from "@/assets/city-mexico.jpg";
import citySF from "@/assets/city-sf.jpg";
import hiking from "@/assets/hiking.jpg";
import landscape1 from "@/assets/landscape-1.jpg";
import cityMilan from "@/assets/city-milan.jpg";
import projectUn from "@/assets/project-un.jpg";

const tagOptions = ["All", "Travel", "Cities", "Policy", "Hiking", "Reflections", "Maps", "Photography"];

const tagColorMap: Record<string, string> = {
  Travel: "tag-blush",
  Cities: "tag-coastal",
  Policy: "tag-sage",
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
    tags: ["Cities", "Travel"],
    image: citySF,
    featured: true,
  },
  {
    title: "What the Data Reveals About LA's Housing Divide",
    excerpt: "Notes from my research at the USC Lusk Center on how census tract data tells the story of inequality, displacement, and community resilience across Los Angeles.",
    date: "February 2026",
    tags: ["Policy", "Cities", "Maps"],
    image: cityLA,
  },
  {
    title: "Mapping Environmental Justice in Redlined LA",
    excerpt: "How spatial analysis reveals the lasting environmental consequences of historical redlining — and what it means for policy today.",
    date: "January 2026",
    tags: ["Policy", "Maps"],
    image: journalCover,
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
    tags: ["Travel", "Cities", "Photography"],
    image: cityMexico,
  },
  {
    title: "Reflections from the United Nations in Beijing",
    excerpt: "On writing speeches for diplomats, navigating cross-cultural policy work, and finding meaning in the daily rhythms of international development.",
    date: "October 2025",
    tags: ["Reflections", "Policy"],
    image: projectUn,
  },
  {
    title: "Milan and the Winter Olympics: Infrastructure as Legacy",
    excerpt: "Notes from my time studying Olympic PPP projects with Bocconi — how infrastructure investment shapes a city's identity long after the closing ceremony.",
    date: "September 2025",
    tags: ["Cities", "Policy", "Travel"],
    image: cityMilan,
  },
  {
    title: "Beijing Through the Seasons",
    excerpt: "A year of watching the capital shift — from the frozen Houhai Lake to the pink blossoms of Yuyuantan Park, and everything the hutongs hold between.",
    date: "August 2025",
    tags: ["Travel", "Cities", "Photography"],
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

const Journal = () => {
  const [activeTag, setActiveTag] = useState("All");

  const filtered = activeTag === "All" ? articles : articles.filter((a) => a.tags.includes(activeTag));
  const featured = filtered.find(a => a.featured) || filtered[0];
  const rest = filtered.filter(a => a !== featured);

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

      {/* Tags — sticky */}
      <section className="py-6 border-b border-border sticky top-16 bg-background/90 backdrop-blur-md z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {tagOptions.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`text-sm font-sans px-4 py-2 transition-all ${
                  activeTag === tag
                    ? "text-primary border-b-2 border-primary font-medium"
                    : "text-muted-foreground hover:text-foreground"
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
          {/* Featured article */}
          {featured && (
            <Link to="#" className="group block mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <div className="overflow-hidden relative">
                    <img src={featured.image} alt={featured.title} width={900} height={600} className="w-full aspect-[16/10] object-cover img-hover" />
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
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4 group-hover:text-primary transition-colors leading-snug">
                    {featured.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{featured.excerpt}</p>
                </div>
              </div>
            </Link>
          )}

          {/* Secondary articles — varied layout */}
          <div className="space-y-16">
            {rest.map((article, i) => {
              if (i % 3 === 0 && rest[i + 1]) {
                // Two-column row
                const next = rest[i + 1];
                return (
                  <div key={article.title} className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <Link to="#" className="group block">
                      <div className="overflow-hidden relative mb-5">
                        <img src={article.image} alt={article.title} width={600} height={400} className="w-full aspect-[4/3] object-cover img-hover" />
                      </div>
                      <span className="text-xs text-muted-foreground font-sans block mb-2">{article.date}</span>
                      <div className="flex gap-2 mb-3">
                        {article.tags.map(t => (
                          <span key={t} className={`text-xs font-sans px-2.5 py-1 ${tagColorMap[t] || 'tag-sage'}`}>{t}</span>
                        ))}
                      </div>
                      <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">{article.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{article.excerpt}</p>
                    </Link>
                    {/* We rendered next inline; skip it in next iteration via key check */}
                  </div>
                );
              }
              // Skip items already rendered as pairs
              if (i > 0 && (i - 1) % 3 === 0) {
                // This is the "next" from the pair above, render it
                return (
                  <div key={article.title} className="grid grid-cols-1 md:grid-cols-2 gap-12 -mt-16">
                    <div className="hidden md:block" />
                    <Link to="#" className="group block md:-mt-0">
                      <div className="overflow-hidden relative mb-5">
                        <img src={article.image} alt={article.title} width={600} height={400} className="w-full aspect-[4/3] object-cover img-hover" />
                      </div>
                      <span className="text-xs text-muted-foreground font-sans block mb-2">{article.date}</span>
                      <div className="flex gap-2 mb-3">
                        {article.tags.map(t => (
                          <span key={t} className={`text-xs font-sans px-2.5 py-1 ${tagColorMap[t] || 'tag-sage'}`}>{t}</span>
                        ))}
                      </div>
                      <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">{article.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{article.excerpt}</p>
                    </Link>
                  </div>
                );
              }
              // Standalone horizontal article
              return (
                <Link to="#" key={article.title} className="group flex flex-col md:flex-row gap-6 items-start py-8 border-t border-border">
                  <div className="w-full md:w-64 shrink-0 overflow-hidden">
                    <img src={article.image} alt={article.title} width={400} height={300} className="w-full aspect-[4/3] object-cover img-hover" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs text-muted-foreground font-sans block mb-2">{article.date}</span>
                    <div className="flex gap-2 mb-3">
                      {article.tags.map(t => (
                        <span key={t} className={`text-xs font-sans px-2.5 py-1 ${tagColorMap[t] || 'tag-sage'}`}>{t}</span>
                      ))}
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
    </Layout>
  );
};

export default Journal;
