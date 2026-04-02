import { useState } from "react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import projectData from "@/assets/project-data.jpg";
import projectGis from "@/assets/project-gis.jpg";
import projectUn from "@/assets/project-un.jpg";
import cityMilan from "@/assets/city-milan.jpg";
import journalCover from "@/assets/journal-cover.jpg";
import cityLA from "@/assets/city-la.jpg";
import landscape1 from "@/assets/landscape-1.jpg";
import cityBeijing from "@/assets/city-beijing.jpg";

const categories = ["All", "Data & Policy", "GIS & Spatial Storytelling", "Writing & Strategy", "Creative / Visual"];

const projects = [
  {
    title: "Neighborhood Data for Social Change (NDSC)",
    category: "Data & Policy",
    description: "Constructed tract-to-neighborhood crosswalks and analyzed 20+ housing and demographic indicators across 1,000+ LA County census tracts for the USC Lusk Center.",
    tools: ["Python", "Stata", "Tableau", "ACS API"],
    image: projectData,
    tags: ["Housing", "Demographics", "LA County", "Research"],
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
    title: "Environmental Justice & Redlining in Los Angeles",
    category: "GIS & Spatial Storytelling",
    description: "Examined environmental justice issues using ArcGIS Pro and CalEnvironScreen 4.0 to analyze pollution exposure in disadvantaged and historically redlined communities.",
    tools: ["ArcGIS Pro", "CalEnvironScreen", "Spatial Joins", "Buffer Analysis"],
    image: projectGis,
    tags: ["Environmental Justice", "GIS", "Redlining", "Policy"],
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
    title: "UN Common Country Analysis & UNSDCF — China",
    category: "Writing & Strategy",
    description: "Revised the 170-page UN CCA and 2026-2030 Sustainable Development Cooperation Framework, guiding UN operations in China across SDG alignment.",
    tools: ["Policy Analysis", "Research", "Strategic Writing"],
    image: projectUn,
    tags: ["United Nations", "SDGs", "Policy", "Strategy"],
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
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            label="Portfolio"
            title="Featured Work"
            description="A selection of projects spanning data analysis, spatial storytelling, policy research, and creative work."
          />

          {/* Filters */}
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

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filtered.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
