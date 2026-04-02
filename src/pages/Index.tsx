import { Link } from "react-router-dom";
import { ArrowRight, Linkedin, Github, Instagram, Mail } from "lucide-react";
import Layout from "@/components/Layout";
import SalesforceIcon from "@/components/SalesforceIcon";
import heroBg from "@/assets/hero-bg.jpg";
import portrait from "@/assets/portrait.jpg";
import projectData from "@/assets/project-data.jpg";
import projectGis from "@/assets/project-gis.jpg";
import projectUn from "@/assets/project-un.jpg";
import journalCover from "@/assets/journal-cover.jpg";
import cityLA from "@/assets/city-la.jpg";
import cityBeijing from "@/assets/city-beijing.jpg";
import cityMexico from "@/assets/city-mexico.jpg";
import citySF from "@/assets/city-sf.jpg";
import hiking from "@/assets/hiking.jpg";

const tagColors = ["tag-sage", "tag-dusty-blue", "tag-mauve", "tag-blush", "tag-coastal"];

const Index = () => {
  return (
    <Layout>
      {/* Hero — Full immersive editorial */}
      <section className="relative min-h-screen flex items-end pb-20">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Coastal city at golden hour" width={1920} height={1080} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(246,242,239,0.95), rgba(217,215,228,0.6))' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <p className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-primary mb-8 opacity-0 animate-fade-in-up">
              Policy · Data · Spatial Storytelling
            </p>
            <h1 className="font-editorial text-5xl md:text-7xl lg:text-8xl text-foreground leading-[1.05] mb-8 opacity-0 animate-fade-in-up animate-delay-100">
              Bridging finance, policy, and impact — through data, cities, and{" "}
              <em className="text-primary not-italic">systems thinking</em>.
            </h1>
            <div className="w-16 h-[1.5px] bg-primary mb-8 opacity-0 animate-fade-in animate-delay-200" />
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl opacity-0 animate-fade-in-up animate-delay-300">
              I'm Mingyue (Katherine) Ding — a public policy researcher and spatial storyteller based in Los Angeles.
              I combine economic analysis, GIS mapping, and editorial writing to understand how cities work.
            </p>
            <div className="flex flex-wrap items-center gap-5 opacity-0 animate-fade-in-up animate-delay-400">
              <Link to="/portfolio" className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground text-sm font-sans font-medium tracking-wide hover:opacity-90 transition-opacity">
                View Portfolio
              </Link>
              <Link to="/about" className="inline-flex items-center gap-2 text-sm font-sans text-foreground hover:text-primary transition-colors tracking-wide">
                About Me <ArrowRight size={14} />
              </Link>
            </div>
            <div className="flex items-center gap-6 mt-14 opacity-0 animate-fade-in animate-delay-500">
              <a href="https://www.linkedin.com/in/mingyuekd/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={17} /></a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Github size={17} /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={17} /></a>
              <a href="https://www.salesforce.com/trailblazer/mingyuekd" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><SalesforceIcon size={17} /></a>
              <a href="mailto:mingyued@usc.edu" className="text-muted-foreground hover:text-primary transition-colors"><Mail size={17} /></a>
            </div>
          </div>
        </div>
      </section>

      {/* About teaser — asymmetric editorial layout */}
      <section className="py-32 gradient-warm-neutral">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 lg:col-start-1">
              <div className="relative">
                <img src={portrait} alt="Mingyue (Katherine) Ding" width={500} height={625} className="w-full max-w-[400px] aspect-[4/5] object-cover" />
                <div className="absolute -bottom-8 right-0 lg:-right-8 w-48 h-36 overflow-hidden opacity-80">
                  <img src={cityBeijing} alt="Beijing — UN Resident Coordinator's Office, China" width={300} height={200} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-10 -right-2 lg:-right-10 w-20 h-20 border-2 border-primary/15" />
                <div className="mt-14 space-y-1">
                  <p className="text-xs text-muted-foreground font-sans">Beijing — UN Resident Coordinator's Office, China</p>
                  <p className="text-xs text-muted-foreground font-sans">Los Angeles — current base</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <span className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-primary mb-6 block">Who I Am</span>
              <h2 className="font-editorial text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
                Between data and <em className="italic text-accent">storytelling</em>
              </h2>
              <div className="w-12 h-[1.5px] bg-primary mb-8" />
              <p className="text-muted-foreground leading-[1.8] mb-6">
                With a background spanning Peking University and USC, the United Nations and local policy research,
                I work at the intersection of rigorous analysis and human narrative — using data not just to measure,
                but to reveal and advocate.
              </p>
              <p className="text-muted-foreground leading-[1.8] mb-8">
                Beyond research, I'm a traveler, city explorer, hiker, and photographer. Understanding places is
                essential to doing meaningful policy work.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-sm font-sans text-primary hover:opacity-70 transition-opacity tracking-wide group">
                Read more about me <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work — editorial project blocks */}
      <section className="py-32 gradient-to-mauve">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-20">
            <div>
              <span className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-primary mb-4 block">Selected Work</span>
              <h2 className="font-editorial text-3xl md:text-5xl text-foreground">Featured Projects</h2>
            </div>
            <Link to="/portfolio" className="hidden md:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors tracking-wide group">
              View all work <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Project 1 — large hero-style */}
          <Link to="#" className="group block mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="overflow-hidden relative">
                  <img src={projectData} alt="Neighborhood Data for Social Change" width={900} height={600} className="w-full aspect-[3/2] object-cover img-hover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
              <div className="lg:col-span-4 lg:col-start-9">
                <span className="tag-sage text-xs font-sans px-3 py-1.5 inline-block mb-4">Data & Policy</span>
                <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4 group-hover:text-primary transition-colors leading-snug">
                  Neighborhood Data for Social Change
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Constructed tract-to-neighborhood crosswalks and analyzed 20+ housing and demographic indicators across 1,000+ LA County census tracts.
                </p>
                <div className="flex flex-wrap gap-1.5 text-xs text-taupe font-sans">
                  <span>Python</span><span>·</span><span>Stata</span><span>·</span><span>Tableau</span><span>·</span><span>ACS Data</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Projects 2 & 3 — two-column asymmetric */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <Link to="#" className="group block">
              <div className="overflow-hidden relative mb-5">
                <img src={projectGis} alt="Environmental Justice & Redlining" width={800} height={600} className="w-full aspect-[4/3] object-cover img-hover" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <span className="tag-dusty-blue text-xs font-sans px-3 py-1.5 inline-block mb-3">GIS & Spatial Storytelling</span>
              <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                Environmental Justice & Redlining in LA
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Leveraged ArcGIS Pro and CalEnvironScreen 4.0 to analyze pollution exposure in disadvantaged communities and historical redlining districts.
              </p>
            </Link>
            <Link to="#" className="group block md:mt-12">
              <div className="overflow-hidden relative mb-5">
                <img src={projectUn} alt="UN Common Country Analysis" width={800} height={600} className="w-full aspect-[4/3] object-cover img-hover" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <span className="tag-mauve text-xs font-sans px-3 py-1.5 inline-block mb-3">Writing & Strategy</span>
              <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                UN Common Country Analysis — China
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Revised the 170-page UN CCA and 2026-2030 UNSDCF, key strategic documents guiding UN work in China, covering economic and sustainable development.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Selected Writing — featured + secondary layout */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-16">
            <div>
              <span className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-primary mb-4 block">Journal & Field Notes</span>
              <h2 className="font-editorial text-3xl md:text-5xl text-foreground">Selected Writing</h2>
            </div>
            <Link to="/journal" className="hidden md:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors tracking-wide group">
              Read more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Featured article — large */}
            <Link to="#" className="lg:col-span-7 group block">
              <div className="overflow-hidden relative">
                <img src={cityLA} alt="San Francisco Streets" width={900} height={600} className="w-full aspect-[16/10] object-cover img-hover" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-foreground/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex gap-2 mb-3">
                    <span className="tag-coastal text-xs font-sans px-2.5 py-1">Cities</span>
                    <span className="tag-blush text-xs font-sans px-2.5 py-1">Travel</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-primary-foreground mb-2 leading-snug group-hover:opacity-90 transition-opacity">
                    Strolls Through the San Francisco Streets
                  </h3>
                  <p className="text-sm text-primary-foreground/70 max-w-lg">
                    Wandering through the fog-laden hills and discovering the quiet neighborhoods that define the city's character.
                  </p>
                  <span className="text-xs text-primary-foreground/50 font-sans mt-3 block">March 2026</span>
                </div>
              </div>
            </Link>

            {/* Secondary articles — stacked */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <Link to="#" className="group flex gap-5 items-start">
                <div className="w-28 h-28 shrink-0 overflow-hidden">
                  <img src={journalCover} alt="Policy article" width={200} height={200} className="w-full h-full object-cover img-hover" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs text-muted-foreground font-sans block mb-1.5">February 2026</span>
                  <h3 className="font-serif text-base text-foreground group-hover:text-primary transition-colors leading-snug mb-1.5">
                    The Policy Steps of Places Becoming Streets
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">How urban planning decisions shape walkability and character.</p>
                </div>
              </Link>
              <div className="w-full h-px bg-border" />
              <Link to="#" className="group flex gap-5 items-start">
                <div className="w-28 h-28 shrink-0 overflow-hidden">
                  <img src={hiking} alt="LA Trails" width={200} height={200} className="w-full h-full object-cover img-hover" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs text-muted-foreground font-sans block mb-1.5">January 2026</span>
                  <h3 className="font-serif text-base text-foreground group-hover:text-primary transition-colors leading-snug mb-1.5">
                    Favorite Trails and Open Spaces in LA
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">A curated guide to hiking trails, hidden parks, and mountain viewpoints.</p>
                </div>
              </Link>
              <div className="w-full h-px bg-border" />
              <Link to="/journal" className="inline-flex items-center gap-2 text-sm text-primary hover:opacity-70 transition-opacity font-sans tracking-wide group mt-2">
                All journal entries <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* City Atlas Preview — large editorial tiles */}
      <section className="py-32 gradient-to-coastal">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-primary mb-4 block">The City Atlas</span>
            <h2 className="font-editorial text-3xl md:text-5xl text-foreground mb-6">Glimpses of Places</h2>
            <p className="text-muted-foreground leading-[1.8]">
              City impressions, neighborhood notes, and travel strategies — a personal archive of the places that have shaped how I see the world.
            </p>
          </div>

          {/* Asymmetric city grid */}
          <div className="grid grid-cols-12 gap-4">
            {/* Large left tile */}
            <Link to="/city-atlas" className="col-span-12 md:col-span-7 group relative overflow-hidden aspect-[4/3]">
              <img src={cityLA} alt="Los Angeles" loading="lazy" width={800} height={600} className="w-full h-full object-cover img-hover" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs text-primary-foreground/60 font-sans tracking-widest uppercase block mb-2">Home base</span>
                <h3 className="font-editorial text-3xl text-primary-foreground">Los Angeles</h3>
              </div>
            </Link>
            {/* Right stacked */}
            <div className="col-span-12 md:col-span-5 grid grid-rows-2 gap-4">
              <Link to="/city-atlas" className="group relative overflow-hidden">
                <img src={cityBeijing} alt="Beijing" loading="lazy" width={400} height={300} className="w-full h-full object-cover img-hover" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-[10px] text-primary-foreground/60 font-sans tracking-widest uppercase block mb-1">Alma mater</span>
                  <h3 className="font-editorial text-xl text-primary-foreground">Beijing</h3>
                </div>
              </Link>
              <Link to="/city-atlas" className="group relative overflow-hidden">
                <img src={cityMexico} alt="Mexico City" loading="lazy" width={400} height={300} className="w-full h-full object-cover img-hover" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-[10px] text-primary-foreground/60 font-sans tracking-widest uppercase block mb-1">Travel notes</span>
                  <h3 className="font-editorial text-xl text-primary-foreground">Mexico City</h3>
                </div>
              </Link>
            </div>
            {/* Bottom row */}
            <Link to="/city-atlas" className="col-span-6 md:col-span-4 group relative overflow-hidden aspect-square">
              <img src={citySF} alt="San Francisco" loading="lazy" width={400} height={400} className="w-full h-full object-cover img-hover" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-[10px] text-primary-foreground/60 font-sans tracking-widest uppercase block mb-1">Fog & hills</span>
                <h3 className="font-editorial text-lg text-primary-foreground">San Francisco</h3>
              </div>
            </Link>
            <Link to="/city-atlas" className="col-span-6 md:col-span-4 group relative overflow-hidden aspect-square">
              <img src={hiking} alt="LA Trails" loading="lazy" width={400} height={400} className="w-full h-full object-cover img-hover" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-[10px] text-primary-foreground/60 font-sans tracking-widest uppercase block mb-1">Hiking guide</span>
                <h3 className="font-editorial text-lg text-primary-foreground">LA Trails</h3>
              </div>
            </Link>
            <div className="col-span-12 md:col-span-4 flex items-center justify-center py-12 md:py-0">
              <div className="text-center">
                <p className="font-editorial text-lg text-muted-foreground italic mb-4">
                  "To understand a city, walk its streets."
                </p>
                <Link to="/city-atlas" className="inline-flex items-center gap-2 text-sm text-primary hover:opacity-70 transition-opacity font-sans tracking-wide group">
                  Explore the Atlas <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
