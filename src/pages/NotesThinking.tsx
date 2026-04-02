import { useState } from "react";
import Layout from "@/components/Layout";

const tagOptions = ["All", "Policy", "Finance", "Philosophy", "Cities", "Systems"];

const tagColors: Record<string, string> = {
  Policy: "tag-sage",
  Finance: "tag-dusty-blue",
  Philosophy: "tag-mauve",
  Cities: "tag-coastal",
  Systems: "tag-blush",
};

const notes = [
  {
    title: "The Case for Spatial Equity Indexes",
    summary:
      "Why composite spatial indexes — combining environmental, economic, and infrastructural data — offer a more honest picture of urban inequality than income alone.",
    tags: ["Policy", "Cities"],
    readingTime: "6 min",
    date: "March 2026",
  },
  {
    title: "PPP Models and the Olympic Legacy Trap",
    summary:
      "Reflections from studying Milan-Cortina 2026: how public-private partnerships in mega-events create infrastructure that cities either absorb or abandon.",
    tags: ["Finance", "Policy"],
    readingTime: "8 min",
    date: "February 2026",
  },
  {
    title: "Redlining as Environmental Policy",
    summary:
      "How mid-century housing discrimination became de facto environmental zoning — and why the spatial overlap between HOLC grades and pollution exposure is not coincidental.",
    tags: ["Policy", "Systems"],
    readingTime: "7 min",
    date: "January 2026",
  },
  {
    title: "Systems Thinking in Development Economics",
    summary:
      "Moving beyond linear causality: how feedback loops, delays, and emergent behavior shape the outcomes of international development interventions.",
    tags: ["Systems", "Philosophy"],
    readingTime: "5 min",
    date: "December 2025",
  },
  {
    title: "What Finance Gets Wrong About Risk",
    summary:
      "Notes on the disconnect between quantitative risk models and lived uncertainty — and why behavioral economics still hasn't bridged the gap.",
    tags: ["Finance", "Philosophy"],
    readingTime: "6 min",
    date: "November 2025",
  },
  {
    title: "The Quiet Politics of Urban Data",
    summary:
      "On how data collection itself is a political act — who counts, what gets measured, and the stories that census tracts can't tell.",
    tags: ["Cities", "Policy", "Systems"],
    readingTime: "7 min",
    date: "October 2025",
  },
  {
    title: "On Reading Across Disciplines",
    summary:
      "Why the most useful insights come from reading outside your field — and how economics, geography, and philosophy inform each other.",
    tags: ["Philosophy"],
    readingTime: "4 min",
    date: "September 2025",
  },
];

const NotesThinking = () => {
  const [activeTag, setActiveTag] = useState("All");
  const filtered =
    activeTag === "All" ? notes : notes.filter((n) => n.tags.includes(activeTag));

  return (
    <Layout>
      {/* Header */}
      <section className="pt-32 pb-16 gradient-to-haze">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-primary mb-4 block">
            Intellectual Archive
          </span>
          <h1 className="font-editorial text-4xl md:text-6xl text-foreground mb-6">
            Notes & Thinking
          </h1>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            Class reflections, policy insights, and frameworks — structured
            thinking on finance, cities, and systems.
          </p>
        </div>
      </section>

      {/* Tags — sticky */}
      <section className="py-6 border-b border-border sticky top-16 bg-background/90 backdrop-blur-md z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {tagOptions.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`text-sm font-sans px-4 py-2 transition-all ${
                  activeTag === tag
                    ? "text-primary border-b-2 border-primary font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Notes list */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="space-y-0">
            {filtered.map((note) => (
              <article
                key={note.title}
                className="group border-t border-border py-10 cursor-pointer"
              >
                {/* Meta row */}
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <span className="text-xs text-muted-foreground/60 font-sans">
                    {note.date}
                  </span>
                  <span className="text-xs text-muted-foreground/40 font-sans">
                    · {note.readingTime} read
                  </span>
                  {note.tags.map((t) => (
                    <span
                      key={t}
                      className={`text-xs font-sans px-2.5 py-1 ${
                        tagColors[t] || "tag-sage"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                  {note.title}
                </h3>

                {/* Summary */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {note.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotesThinking;
