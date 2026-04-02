import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import projectData from "@/assets/project-data.jpg";
import projectGis from "@/assets/project-gis.jpg";
import projectUn from "@/assets/project-un.jpg";
import cityMilan from "@/assets/city-milan.jpg";
import journalCover from "@/assets/journal-cover.jpg";
import cityLA from "@/assets/city-la.jpg";
import landscape1 from "@/assets/landscape-1.jpg";
import cityBeijing from "@/assets/city-beijing.jpg";

const categories = ["All", "Data & Policy", "GIS & Spatial Storytelling", "Writing & Strategy", "Creative / Visual"];

const tagColorMap: Record<string, string> = {
  "Data & Policy": "tag-sage",
  "GIS & Spatial Storytelling": "tag-dusty-blue",
  "Writing & Strategy": "tag-mauve",
  "Creative / Visual": "tag-blush",
};

const projects = [
  {
    title: "Neighborhood Data for Social Change (NDSC)",
    category: "Data & Policy",
    description: "Constructed tract-to-neighborhood crosswalks and analyzed 20+ housing and demographic indicators across 1,000+ LA County census tracts for the USC Lusk Center.",
    tools: ["Python", "Stata", "Tableau", "ACS API"],
    image: projectData,
    tags: ["Housing", "Demographics", "LA County", "Research"],
    featured: true,
  },
  {
    title: "Environmental Justice & Redlining in Los Angeles",
    category: "GIS & Spatial Storytelling",
    description: "Examined environmental justice issues using ArcGIS Pro and CalEnvironScreen 4.0 to analyze pollution exposure in disadvantaged and historically redlined communities.",
    tools: ["ArcGIS Pro", "CalEnvironScreen", "Spatial Joins", "Buffer Analysis"],
    image: projectGis,
    tags: ["Environmental Justice", "GIS", "Redlining", "Policy"],
    featured: true,
  },
  {
    title: "UN Common Country Analysis & UNSDCF — China",
    category: "Writing & Strategy",
    description: "Revised the 170-page UN CCA and 2026-2030 Sustainable Development Cooperation Framework, guiding UN operations in China across SDG alignment.",
    tools: ["Policy Analysis", "Research", "Strategic Writing"],
    image: projectUn,
    tags: ["United Nations", "SDGs", "Policy", "Strategy"],
    featured: true,
  },
  {
    title: "San Gabriel Valley Community Data Profiles",
    category: "Data & Policy",
    description: "Synthesized indicators across housing, education, and environmental dimensions to support local policy analysis for SGV communities.",
    tools: ["Python", "Stata", "Data Visualization"],
    image: cityLA,
    tags: ["Community", "Data", "Housing", "Education"],
  },
  {
    title: "2026 Milan Winter Olympics PPP Infrastructure",
    category: "GIS & Spatial Storytelling",
    description: "Researched Olympic PPP infrastructure projects with Bocconi University, focusing on sustainability, legacy utilization, and multi-use urban development strategies.",
    tools: ["Research", "Stakeholder Analysis", "Urban Planning"],
    image: cityMilan,
    tags: ["Olympics", "Infrastructure", "Sustainability", "Urban"],
  },
  {
    title: "Two Sessions & Tariff Impact Analysis",
    category: "Writing & Strategy",
    description: "Conducted macroeconomic research and wrote analysis on China's 2025 Government Work Report, U.S. tariff impacts, and Statistical Communiqué for UN policy guidance.",
    tools: ["Economic Analysis", "Policy Research", "Writing"],
    image: journalCover,
    tags: ["Macroeconomics", "Trade Policy", "China", "UN"],
  },
  {
    title: "China 'Little Giants' Enterprises White Paper",
    category: "Writing & Strategy",
    description: "Authored the 2024 white paper at Frost & Sullivan identifying sector-level competitiveness drivers and international expansion pathways for Chinese SMEs.",
    tools: ["WIND", "Financial Analysis", "Consulting"],
    image: cityBeijing,
    tags: ["Consulting", "Technology", "Strategy"],
  },
  {
    title: "Travel Photography & Visual Storytelling",
    category: "Creative / Visual",
    description: "An ongoing collection of travel photography, city portraits, and visual essays exploring urban landscapes, hiking trails, and cultural moments across continents.",
    tools: ["Photography", "Visual Editing", "Storytelling"],
    image: landscape1,
    tags: ["Photography", "Travel", "Cities", "Visual"],
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      {/* Header */}
      <section className="pt-32 pb-16 gradient-warm-neutral">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-primary mb-4 block">Portfolio</span>
          <h1 className="font-editorial text-4xl md:text-6xl text-foreground mb-6">Featured Work</h1>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            A selection of projects spanning data analysis, spatial storytelling, policy research, and creative work.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border sticky top-16 bg-background/90 backdrop-blur-md z-30">
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

      {/* Projects — editorial layout */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">
          {filtered.map((project, i) => {
            const isReversed = i % 2 === 1;
            const isLarge = project.featured || i === 0;

            return (
              <article key={project.title} className="group">
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isReversed ? '' : ''}`}>
                  <div className={`${isLarge ? 'lg:col-span-7' : 'lg:col-span-6'} ${isReversed ? 'lg:order-2 lg:col-start-7' : ''}`}>
                    <div className="overflow-hidden relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        width={900}
                        height={600}
                        className={`w-full ${isLarge ? 'aspect-[3/2]' : 'aspect-[4/3]'} object-cover img-hover`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                  <div className={`${isLarge ? 'lg:col-span-4' : 'lg:col-span-5'} ${isReversed ? 'lg:order-1 lg:col-start-1' : ''}`}>
                    <span className={`${tagColorMap[project.category] || 'tag-sage'} text-xs font-sans px-3 py-1.5 inline-block mb-4`}>
                      {project.category}
                    </span>
                    <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4 group-hover:text-primary transition-colors leading-snug">
                      {project.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, ti) => (
                        <span key={tag} className={`text-xs font-sans px-2.5 py-1 ${['tag-sage', 'tag-dusty-blue', 'tag-mauve', 'tag-blush', 'tag-coastal'][ti % 5]}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-1.5 text-xs text-taupe font-sans">
                      {project.tools.map((tool, ti) => (
                        <span key={tool}>{tool}{ti < project.tools.length - 1 ? " ·" : ""}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
