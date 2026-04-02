import { Download, MapPin, BookOpen, Code, Globe } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import portrait from "@/assets/portrait.jpg";

const skills = [
  { category: "Data & Analysis", items: ["Python (Pandas, NumPy, Scikit-learn)", "R (ggplot2)", "Stata", "Matlab", "Power BI", "Tableau"] },
  { category: "Spatial & GIS", items: ["ArcGIS Pro", "Spatial Analysis", "Buffer Analysis", "Map Visualization"] },
  { category: "Research & Writing", items: ["Policy Analysis", "Macroeconomic Research", "Academic Writing", "Speechwriting", "Content Strategy"] },
  { category: "Tools & Platforms", items: ["Bloomberg", "Salesforce", "SharePoint", "Microsoft Office", "Think-cell", "Copilot"] },
  { category: "Languages", items: ["English (fluent)", "Mandarin (native)", "Spanish (intermediate)", "French (basic)"] },
  { category: "Certifications", items: ["CFA ESG Investing", "Bloomberg ESG", "UN SDG Certificate", "HubSpot Content Marketing", "Salesforce Associate"] },
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

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-sans font-medium tracking-widest uppercase text-primary mb-4">About</p>
              <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
                Hello, I'm Katherine
              </h1>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
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
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-primary text-primary-foreground rounded-md text-sm font-sans font-medium hover:opacity-90 transition-opacity"
              >
                <Download size={16} /> Download Resume
              </a>
            </div>
            <div className="relative">
              <img src={portrait} alt="Katherine Ding" width={800} height={1000} className="rounded-lg shadow-lg w-full" />
              <div className="absolute -bottom-6 -left-6 bg-card rounded-lg p-4 shadow-md border border-border">
                <p className="font-editorial text-lg text-foreground">Based in Los Angeles</p>
                <p className="text-xs text-muted-foreground font-sans flex items-center gap-1"><MapPin size={12} /> USC · Sol Price School</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader label="Skills & Tools" title="What I Work With" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((group) => (
              <div key={group.category} className="p-6 rounded-lg bg-background border border-border">
                <h3 className="font-sans text-sm font-medium tracking-wide uppercase text-primary mb-4">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="text-sm font-sans px-3 py-1.5 rounded-full bg-muted text-muted-foreground">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader label="Experience" title="Where I've Worked" />
          <div className="space-y-8 max-w-3xl">
            {experience.map((exp, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-primary mt-1.5" />
                  {i < experience.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                </div>
                <div className="pb-8">
                  <h3 className="font-serif text-lg text-foreground">{exp.role}</h3>
                  <p className="text-sm font-sans text-primary">{exp.org}</p>
                  <p className="text-xs text-muted-foreground font-sans mt-1">{exp.period} · {exp.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader label="Education" title="Where I've Studied" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {education.map((edu, i) => (
              <div key={i} className="p-6 rounded-lg bg-background border border-border">
                <h3 className="font-serif text-xl text-foreground mb-1">{edu.degree}</h3>
                <p className="text-sm font-sans text-primary mb-2">{edu.school}</p>
                <p className="text-xs text-muted-foreground font-sans mb-3">{edu.detail}</p>
                <p className="text-xs text-taupe font-sans">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
