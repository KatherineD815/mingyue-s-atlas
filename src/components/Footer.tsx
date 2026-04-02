import { Link } from "react-router-dom";
import { Linkedin, Github, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <h3 className="font-editorial text-2xl mb-4 text-foreground">Katherine Ding</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Researching places, people, and policy through data, maps, and stories.
            </p>
            <div className="flex gap-5 mt-6">
              <a href="https://www.linkedin.com/in/mingyuekd/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={17} /></a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Github size={17} /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={17} /></a>
              <a href="mailto:mingyued@usc.edu" className="text-muted-foreground hover:text-primary transition-colors"><Mail size={17} /></a>
            </div>
          </div>
          <div className="md:col-span-3 md:col-start-8">
            <h4 className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-foreground mb-5">Navigate</h4>
            <div className="flex flex-col gap-3">
              {["About", "Portfolio", "Journal", "City Atlas", "Photography", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors font-sans"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:col-span-2 md:col-start-11">
            <h4 className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-foreground mb-5">Contact</h4>
            <p className="text-sm text-muted-foreground font-sans">mingyued@usc.edu</p>
            <p className="text-xs text-muted-foreground font-sans mt-2">Los Angeles, CA</p>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground/60 font-sans">
            © {new Date().getFullYear()} Katherine Ding
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
