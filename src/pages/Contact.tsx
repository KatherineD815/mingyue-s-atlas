import { Mail, Linkedin, Github, Instagram, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Contact = () => {
  return (
    <Layout>
      <section className="min-h-[85vh] flex items-center gradient-to-coastal">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-32 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <span className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-primary mb-6 block">Get in Touch</span>
              <h1 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
                Let's Connect
              </h1>
              <div className="w-12 h-[1.5px] bg-primary mb-8" />
              <p className="text-muted-foreground leading-[1.8] mb-4">
                I'm currently open to roles in policy research, data analysis, spatial analysis, strategy,
                and mission-driven organizations. I'd love to hear from you — whether it's about a role,
                a collaboration, or just a shared interest in cities, maps, and stories.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-10">
                <MapPin size={14} className="text-primary" /> Los Angeles, CA
              </div>

              <div className="space-y-0">
                <a
                  href="mailto:mingyued@usc.edu"
                  className="flex items-center gap-4 py-5 border-b border-border hover:bg-muted/20 transition-colors px-4 -mx-4 group"
                >
                  <Mail size={18} className="text-primary shrink-0" />
                  <div>
                    <p className="text-sm font-sans font-medium text-foreground group-hover:text-primary transition-colors">Email</p>
                    <p className="text-xs text-muted-foreground">mingyued@usc.edu</p>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/mingyuekd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 py-5 border-b border-border hover:bg-muted/20 transition-colors px-4 -mx-4 group"
                >
                  <Linkedin size={18} className="text-primary shrink-0" />
                  <div>
                    <p className="text-sm font-sans font-medium text-foreground group-hover:text-primary transition-colors">LinkedIn</p>
                    <p className="text-xs text-muted-foreground">linkedin.com/in/mingyuekd</p>
                  </div>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 py-5 border-b border-border hover:bg-muted/20 transition-colors px-4 -mx-4 group"
                >
                  <Github size={18} className="text-primary shrink-0" />
                  <div>
                    <p className="text-sm font-sans font-medium text-foreground group-hover:text-primary transition-colors">GitHub</p>
                    <p className="text-xs text-muted-foreground">github.com/katherine</p>
                  </div>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 py-5 border-b border-border hover:bg-muted/20 transition-colors px-4 -mx-4 group"
                >
                  <Instagram size={18} className="text-primary shrink-0" />
                  <div>
                    <p className="text-sm font-sans font-medium text-foreground group-hover:text-primary transition-colors">Instagram</p>
                    <p className="text-xs text-muted-foreground">@katherine.ding</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 lg:col-start-9 flex items-end">
              <div className="editorial-quote">
                <p className="font-editorial text-xl text-foreground italic leading-relaxed">
                  "The world is a book, and those who do not travel read only one page."
                </p>
                <p className="text-sm text-muted-foreground mt-3 font-sans">— Saint Augustine</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
