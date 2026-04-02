import { Mail, Linkedin, Github, Instagram, MapPin } from "lucide-react";
import Layout from "@/components/Layout";

const Contact = () => {
  return (
    <Layout>
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs font-sans font-medium tracking-widest uppercase text-primary mb-4">Get in Touch</p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Let's Connect</h1>
          <p className="text-muted-foreground leading-relaxed mb-4 max-w-xl mx-auto">
            I'm currently open to roles in policy research, data analysis, spatial analysis, strategy, 
            and mission-driven organizations. I'd love to hear from you — whether it's about a role, 
            a collaboration, or just a shared interest in cities, maps, and stories.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-12">
            <MapPin size={14} /> Los Angeles, CA
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-lg mx-auto mb-16">
            <a
              href="mailto:mingyued@usc.edu"
              className="flex items-center gap-3 p-5 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <Mail size={20} className="text-primary" />
              <div className="text-left">
                <p className="text-sm font-sans font-medium text-foreground">Email</p>
                <p className="text-xs text-muted-foreground">mingyued@usc.edu</p>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/mingyuekd/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-5 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <Linkedin size={20} className="text-primary" />
              <div className="text-left">
                <p className="text-sm font-sans font-medium text-foreground">LinkedIn</p>
                <p className="text-xs text-muted-foreground">linkedin.com/in/mingyuekd</p>
              </div>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-5 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <Github size={20} className="text-primary" />
              <div className="text-left">
                <p className="text-sm font-sans font-medium text-foreground">GitHub</p>
                <p className="text-xs text-muted-foreground">github.com/katherine</p>
              </div>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-5 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <Instagram size={20} className="text-primary" />
              <div className="text-left">
                <p className="text-sm font-sans font-medium text-foreground">Instagram</p>
                <p className="text-xs text-muted-foreground">@katherine.ding</p>
              </div>
            </a>
          </div>

          <div className="p-8 rounded-lg bg-sage-light">
            <p className="font-editorial text-lg text-foreground italic">
              "The world is a book, and those who do not travel read only one page."
            </p>
            <p className="text-sm text-muted-foreground mt-2 font-sans">— Saint Augustine</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
