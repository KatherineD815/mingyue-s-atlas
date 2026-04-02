import { useState } from "react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import ArticleCard from "@/components/ArticleCard";
import journalCover from "@/assets/journal-cover.jpg";
import cityLA from "@/assets/city-la.jpg";
import cityBeijing from "@/assets/city-beijing.jpg";
import cityMexico from "@/assets/city-mexico.jpg";
import citySF from "@/assets/city-sf.jpg";
import hiking from "@/assets/hiking.jpg";
import landscape1 from "@/assets/landscape-1.jpg";
import cityMilan from "@/assets/city-milan.jpg";
import projectUn from "@/assets/project-un.jpg";

const tags = ["All", "Travel", "Cities", "Policy", "Hiking", "Reflections", "Maps", "Photography"];

const articles = [
  {
    title: "Strolls Through the San Francisco Streets",
    excerpt: "Wandering through fog-laden hills, discovering quiet neighborhoods that define the city beyond the tourist trail — cable cars, steep stairways, and hidden garden parks.",
    date: "March 2026",
    tags: ["Cities", "Travel"],
    image: citySF,
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

  return (
    <Layout>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            label="Journal & Field Notes"
            title="Writing & Reflections"
            description="Travel reflections, city exploration, maps, and thoughtful observations — a space for the ideas that don't fit neatly into a resume."
          />

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-12">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`text-sm font-sans px-4 py-2 rounded-full transition-colors ${
                  activeTag === tag
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filtered.map((article) => (
              <ArticleCard key={article.title} {...article} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Journal;
