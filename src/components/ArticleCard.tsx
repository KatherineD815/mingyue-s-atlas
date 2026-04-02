import { Link } from "react-router-dom";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  image: string;
  slug?: string;
}

const ArticleCard = ({ title, excerpt, date, tags, image, slug = "#" }: ArticleCardProps) => {
  return (
    <Link to={slug} className="group block">
      <div className="overflow-hidden rounded-lg mb-4">
        <img
          src={image}
          alt={title}
          loading="lazy"
          width={800}
          height={600}
          className="w-full h-48 object-cover img-hover"
        />
      </div>
      <div>
        <span className="text-xs font-sans text-muted-foreground mb-2 block">{date}</span>
        <h3 className="font-serif text-lg mb-2 text-foreground group-hover:text-primary transition-colors leading-snug">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2">{excerpt}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="text-xs font-sans px-2 py-1 rounded-full bg-muted text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
