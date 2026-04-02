import { Download, MapPin, Linkedin, Github, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SalesforceIcon from "@/components/SalesforceIcon";
import portrait from "@/assets/portrait.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import cityBeijing from "@/assets/city-beijing.jpg";

const skills = [
  { category: "Data & Analysis", items: ["Python (Pandas, NumPy, Scikit-learn)", "R (ggplot2)", "Stata", "Matlab", "Power BI", "Tableau"] },
  { category: "Spatial & GIS", items: ["ArcGIS Pro", "Spatial Analysis", "Buffer Analysis", "Map Visualization"] },
  { category: "Research & Writing", items: ["Policy Analysis", "Macroeconomic Research", "Academic Writing", "Speechwriting", "Content Strategy"] },
  { category: "Tools & Platforms", items: ["Bloomberg", "Salesforce", "SharePoint", "Microsoft Office", "Think-cell", "Copilot"] },
  { category: "Languages", items: ["English (fluent)", "Mandarin (native)", "Spanish (intermediate)", "French (basic)"] },
  {
    category: "Certifications",
    items: [
      { label: "CFA ESG Investing", url: "https://www.cfainstitute.org/en/programs/esg-investing" },
      { label: "Bloomberg ESG", url: "https://www.bloomberg.com/professional/product/bloomberg-terminal/" },
      { label: "UN SDG Certificate", url: "https://www.unssc.org/courses/2030-agenda-sustainable-development" },
      { label: "HubSpot Content Marketing", url: "https://academy.hubspot.com/courses/content-marketing" },
      { label: "Salesforce Associate", url: "https://trailhead.salesforce.com/en/credentials/salesforceassociate" },
    ],
  },
];

const experience = [
  { role: "Graduate Research Assistant", org: "USC Lusk Center for Real Estate — NDSC", period: "Sep 2025 – Present", location: "Los Angeles" },
  { role: "Economic Development & Sustainable Finance Specialist", org: "United Nations — Resident Coordinator Office in China", period: "Sep 2024 – Sep 2025", location: "Beijing" },
  { role: "Consulting Intern, Energy Technology & Sustainability", org: "Frost & Sullivan", period: "Jul 2024 – Sep 2024", location: "Shanghai" },
  { role: "Investment Banking Summer Intern", org: "China International Capital Corporation (CICC)", period: "Jul 2022 – Sep 2022", location: "Shenzhen" },
  { role: "Business Analysis Intern", org: "Tencent", period: "Jul 2021 – Nov 2021", location: "Beijing" },
];

const education = [
  { degree: "Master of Public Administration", school: "University of Southern California, Sol Price School of Public Policy", detail: "Specialization in International Economics · GPA 3.8 · Public Policy Advocacy Certificate (Annenberg)", period: "Expected May 2026" },
  { degree: "Bachelor of Economics in Finance", school: "Peking University, School of Economics", detail: "Summer School: Oxford University, Oriel College", period: "Jun 2023" },
];

const tagColors = ["tag-sage", "tag-dusty-blue", "tag-mauve", "tag-blush", "tag-coastal"];

const About = () => {
  return (
    <Layout>
      {/* Hero — editorial asymmetric */}
      <section className="relative min-h-[50vh] flex items-end pb-16">
        <div className="absolute inset-0">
          <img src={heroBg} alt="About background" width={1920} height={1080} className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(246,242,239,0.92), rgba(217,215,228,0.5))' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <span className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-primary mb-4 block">About</span>
          <h1 className="font-editorial text-4xl md:text-6xl lg:text-7xl text-foreground leading-tight">
            Hello, I'm Mingyue (Katherine)
          </h1>
        </div>
      </section>

      {/* Bio — asymmetric layout with layered images */}
      <section className="py-28 gradient-warm-neutral">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="relative sticky top-24">
                <img src={portrait} alt="Mingyue (Katherine) Ding" width={500} height={625} className="w-full max-w-[380px] aspect-[4/5] object-cover" />
                <div className="absolute -bottom-8 right-0 lg:-right-6 w-44 h-32 overflow-hidden opacity-80 shadow-md">
                  <img src={cityBeijing} alt="Beijing" width={300} height={200} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-10 -right-2 lg:-right-8 w-20 h-20 border-2 border-primary/15" />
                <div className="mt-14 space-y-1">
                  <p className="text-xs text-muted-foreground font-sans">Beijing — UN Resident Coordinator's Office, China</p>
                  <p className="text-xs text-muted-foreground font-sans">Los Angeles — current base</p>
                </div>
                <div className="flex items-center gap-5 mt-6">
                  <a href="https://www.linkedin.com/in/mingyuekd/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={16} /></a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Github size={16} /></a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={16} /></a>
                  <a href="https://www.salesforce.com/trailblazer/mingyuekd" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><SalesforceIcon size={16} /></a>
                  <a href="mailto:mingyued@usc.edu" className="text-muted-foreground hover:text-primary transition-colors"><Mail size={16} /></a>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="space-y-6 text-muted-foreground leading-[1.9]">
                <p>
                  I'm a public policy researcher and spatial storyteller with a background that bridges economics, data analysis,
                  and international development. Currently completing my MPA at USC's Sol Price School with a specialization in
                  International Economics, I bring an interdisciplinary lens to everything I do.
                </p>
                <p>
                  My work spans from analyzing housing indicators across 1,000+ census tracts in LA County, to revising the
                  United Nations' strategic documents in China, to conducting environmental justice research through GIS mapping.
                  I'm drawn to the intersection of rigorous analysis and human storytelling — using data not just to measure,
                  but to reveal and advocate.
                </p>
                <p>
                  Beyond research, I'm a traveler, city explorer, hiker, and photographer. I believe that understanding places —
                  walking their streets, learning their histories, mapping their patterns — is essential to doing meaningful policy work.
                </p>
              </div>
              <a
                href="/Katherine_Ding_Resume.pdf"
                download
                className="inline-flex items-center gap-2 mt-10 px-7 py-3.5 bg-primary text-primary-foreground text-sm font-sans font-medium tracking-wide hover:opacity-90 transition-opacity"
              >
                <Download size={16} /> Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills — editorial grid with clickable certifications */}
      <section className="py-28 gradient-to-mauve">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-primary mb-4 block">Skills & Tools</span>
          <h2 className="font-editorial text-3xl md:text-4xl text-foreground mb-16">What I Work With</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
            {skills.map((group, gi) => (
              <div key={group.category} className="border-t border-border pt-6">
                <h3 className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-primary mb-5">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.category === "Certifications"
                    ? (group.items as { label: string; url: string }[]).map((item, ii) => (
                        <a
                          key={item.label}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-sm font-sans px-3 py-1.5 ${tagColors[(gi + ii) % tagColors.length]} hover:opacity-75 transition-opacity cursor-pointer underline-offset-2 hover:underline`}
                        >
                          {item.label}
                        </a>
                      ))
                    : (group.items as string[]).map((item, ii) => (
                        <span key={item} className={`text-sm font-sans px-3 py-1.5 ${tagColors[(gi + ii) % tagColors.length]}`}>{item}</span>
                      ))
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience — editorial timeline */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <span className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-primary mb-4 block">Experience</span>
              <h2 className="font-editorial text-3xl md:text-4xl text-foreground">Where I've Worked</h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              {experience.map((exp, i) => (
                <div key={i} className="py-6 border-b border-border group hover:bg-muted/20 transition-colors px-4 -mx-4">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0" />
                    <div>
                      <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors">{exp.role}</h3>
                      <p className="text-sm font-sans text-primary/80 mt-0.5">{exp.org}</p>
                      <p className="text-xs text-muted-foreground font-sans mt-1">{exp.period} · {exp.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-28 gradient-to-coastal">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <span className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-primary mb-4 block">Education</span>
              <h2 className="font-editorial text-3xl md:text-4xl text-foreground">Where I've Studied</h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 space-y-8">
              {education.map((edu, i) => (
                <div key={i} className="py-6 border-b border-border">
                  <h3 className="font-serif text-xl text-foreground mb-1">{edu.degree}</h3>
                  <p className="text-sm font-sans text-primary/80 mb-2">{edu.school}</p>
                  <p className="text-xs text-muted-foreground font-sans mb-1">{edu.detail}</p>
                  <p className="text-xs text-taupe font-sans">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
