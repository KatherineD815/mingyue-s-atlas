import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  tools: string[];
  image: string;
  tags: string[];
  slug?: string;
}

const ProjectCard = ({ title, category, description, tools, image, tags, slug = "#" }: ProjectCardProps) => {
  return (
    <Link to={slug} className="group block">
      <div className="overflow-hidden rounded-lg mb-4">
        <img
          src={image}
          alt={title}
          loading="lazy"
          width={800}
          height={600}
          className="w-full h-56 object-cover img-hover"
        />
      </div>
      <div>
        <span className="text-xs font-sans font-medium tracking-widest uppercase text-primary mb-2 block">
          {category}
        </span>
        <h3 className="font-serif text-xl mb-2 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-3">{description}</p>
        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map((tag) => (
            <span key={tag} className="text-xs font-sans px-2 py-1 rounded-full bg-muted text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-1">
          {tools.map((tool) => (
            <span key={tool} className="text-xs font-sans text-taupe">
              {tool}{tools.indexOf(tool) < tools.length - 1 ? " ·" : ""}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
