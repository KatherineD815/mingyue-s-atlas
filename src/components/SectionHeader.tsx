interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

const SectionHeader = ({ label, title, description, align = "left" }: SectionHeaderProps) => {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : ""}`}>
      {label && (
        <span className="text-xs font-sans font-medium tracking-widest uppercase text-primary mb-3 block">
          {label}
        </span>
      )}
      <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">{title}</h2>
      {description && (
        <p className={`text-muted-foreground leading-relaxed max-w-2xl ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
