import { Link } from "react-router-dom";
import { ArrowRight, Linkedin, Github, Instagram, Mail } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import ArticleCard from "@/components/ArticleCard";
import heroBg from "@/assets/hero-bg.jpg";
import portrait from "@/assets/portrait.jpg";
import projectData from "@/assets/project-data.jpg";
import projectGis from "@/assets/project-gis.jpg";
import projectUn from "@/assets/project-un.jpg";
import journalCover from "@/assets/journal-cover.jpg";
import cityLA from "@/assets/city-la.jpg";
import cityBeijing from "@/assets/city-beijing.jpg";
import cityMexico from "@/assets/city-mexico.jpg";
import hiking from "@/assets/hiking.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Coastal city at golden hour" width={1920} height={1080} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-sans font-medium tracking-widest uppercase text-primary mb-6 animate-fade-in-up">
              Policy · Data · Spatial Storytelling
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight mb-6 animate-fade-in-up animate-delay-100">
              Researching places, people, and policy through data, maps, and stories.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 animate-fade-in-up animate-delay-200">
              I'm Katherine Ding — a public policy researcher and spatial storyteller based in Los Angeles. 
              I combine economic analysis, GIS mapping, and editorial writing to understand how cities work 
              and how policy shapes the lives within them.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up animate-delay-300">
              <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md text-sm font-sans font-medium hover:opacity-90 transition-opacity">
                About Me
              </Link>
              <Link to="/portfolio" className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-md text-sm font-sans font-medium hover:bg-muted transition-colors">
                View Portfolio
              </Link>
              <Link to="/journal" className="inline-flex items-center gap-2 px-6 py-3 text-muted-foreground text-sm font-sans font-medium hover:text-primary transition-colors">
                Read Journal <ArrowRight size={14} />
              </Link>
            </div>
            <div className="flex items-center gap-5 mt-10 animate-fade-in-up animate-delay-400">
              <a href="https://www.linkedin.com/in/mingyuekd/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={18} /></a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Github size={18} /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={18} /></a>
              <a href="mailto:mingyued@usc.edu" className="text-muted-foreground hover:text-primary transition-colors"><Mail size={18} /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <SectionHeader label="Selected Work" title="Featured Projects" />
            <Link to="/portfolio" className="hidden md:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              View all <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProjectCard
              title="Neighborhood Data for Social Change"
              category="Data & Policy"
              description="Constructed tract-to-neighborhood crosswalks and analyzed 20+ housing and demographic indicators across 1,000+ LA County census tracts."
              tools={["Python", "Stata", "Tableau", "ACS Data"]}
              image={projectData}
              tags={["Housing", "Demographics", "LA County"]}
            />
            <ProjectCard
              title="Environmental Justice & Redlining in LA"
              category="GIS & Spatial Storytelling"
              description="Leveraged ArcGIS Pro and CalEnvironScreen 4.0 to analyze pollution exposure in disadvantaged communities and historical redlining districts."
              tools={["ArcGIS Pro", "Python", "Spatial Analysis"]}
              image={projectGis}
              tags={["Environmental Justice", "GIS", "Policy"]}
            />
            <ProjectCard
              title="UN Common Country Analysis — China"
              category="Writing & Strategy"
              description="Revised the 170-page UN CCA and 2026-2030 UNSDCF, key strategic documents guiding UN work in China, covering economic and sustainable development."
              tools={["Policy Analysis", "Research", "Writing"]}
              image={projectUn}
              tags={["United Nations", "Policy", "SDGs"]}
            />
          </div>
        </div>
      </section>

      {/* Selected Writing */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <SectionHeader label="Journal & Field Notes" title="Selected Writing" />
            <Link to="/journal" className="hidden md:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              Read more <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ArticleCard
              title="Strolls Through the San Francisco Streets"
              excerpt="Wandering through the fog-laden hills and discovering the quiet neighborhoods that define the city's character beyond the tourist trail."
              date="March 2026"
              tags={["Cities", "Travel"]}
              image={cityLA}
            />
            <ArticleCard
              title="The Policy Steps of Places Becoming Streets"
              excerpt="How urban planning decisions in Los Angeles shape the walkability and character of neighborhoods from Koreatown to Silver Lake."
              date="February 2026"
              tags={["Policy", "Cities"]}
              image={journalCover}
            />
            <ArticleCard
              title="Favorite Trails and Open Spaces in LA"
              excerpt="A curated guide to the hiking trails, hidden parks, and mountain viewpoints that reveal Los Angeles beyond its urban sprawl."
              date="January 2026"
              tags={["Hiking", "Travel", "Photography"]}
              image={hiking}
            />
          </div>
        </div>
      </section>

      {/* City Atlas Preview */}
      <section className="py-24 bg-sage-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            label="The City Atlas"
            title="Glimpses of Places"
            description="City impressions, neighborhood notes, and travel strategies — a personal archive of the places that have shaped how I see the world."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { img: cityLA, name: "Los Angeles", sub: "Home base" },
              { img: cityBeijing, name: "Beijing", sub: "Alma mater" },
              { img: cityMexico, name: "Mexico City", sub: "Travel notes" },
              { img: hiking, name: "LA Trails", sub: "Hiking guide" },
            ].map((city) => (
              <Link to="/city-atlas" key={city.name} className="group relative overflow-hidden rounded-lg aspect-square">
                <img src={city.img} alt={city.name} loading="lazy" width={400} height={400} className="w-full h-full object-cover img-hover" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="font-serif text-lg text-primary-foreground">{city.name}</h3>
                  <p className="text-xs text-primary-foreground/70 font-sans">{city.sub}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/city-atlas" className="inline-flex items-center gap-2 text-sm text-primary hover:opacity-80 transition-opacity font-sans">
              Explore the Atlas <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
