import { Link } from "react-router-dom";
import { Linkedin, Github, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-editorial text-lg mb-4 text-foreground">Katherine Ding</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Researching places, people, and policy through data, maps, and stories.
            </p>
          </div>
          <div>
            <h4 className="font-sans text-sm font-medium mb-4 text-foreground tracking-wide uppercase">Navigate</h4>
            <div className="flex flex-col gap-2">
              {["About", "Portfolio", "Journal", "City Atlas", "Photography", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-sans text-sm font-medium mb-4 text-foreground tracking-wide uppercase">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a href="https://www.linkedin.com/in/mingyuekd/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="mailto:mingyued@usc.edu" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail size={18} />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">mingyued@usc.edu</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Katherine Ding. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
