import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import cityLA from "@/assets/city-la.jpg";
import cityBeijing from "@/assets/city-beijing.jpg";
import cityMexico from "@/assets/city-mexico.jpg";
import cityNewYork from "@/assets/city-newyork.jpg";
import citySF from "@/assets/city-sf.jpg";
import cityMilan from "@/assets/city-milan.jpg";
import hiking from "@/assets/hiking.jpg";
import landscape1 from "@/assets/landscape-1.jpg";
import landscape2 from "@/assets/landscape-2.jpg";

const cities = [
  {
    name: "Los Angeles",
    tagline: "Home base — neighborhoods, hiking, and a city in constant motion",
    image: cityLA,
    sections: ["Neighborhood Notes", "Hiking Recommendations", "Favorite Saved Places"],
    status: "Living here",
  },
  {
    name: "Beijing",
    tagline: "Four years of hutongs, policy, and northern wind",
    image: cityBeijing,
    sections: ["City Impressions", "University Life", "Food & Culture"],
    status: "2019–2023",
  },
  {
    name: "Mexico City",
    tagline: "Markets, murals, and the mathematics of altitude",
    image: cityMexico,
    sections: ["Travel Strategy", "Neighborhood Guide", "Photo Diary"],
    status: "Travel notes",
  },
  {
    name: "New York",
    tagline: "Walking every borough, one subway stop at a time",
    image: cityNewYork,
    sections: ["Travel Strategy", "City Walks", "Favorite Spots"],
    status: "Travel notes",
  },
  {
    name: "San Francisco",
    tagline: "Hills, fog, and the poetry of infrastructure",
    image: citySF,
    sections: ["City Impressions", "Walks", "Photography"],
    status: "Travel notes",
  },
  {
    name: "Milan",
    tagline: "Olympic infrastructure, Italian light, and Bocconi mornings",
    image: cityMilan,
    sections: ["City Impressions", "Research Notes", "Travel Diary"],
    status: "2024 Lab",
  },
];

const laNeighborhoods = [
  { name: "Silver Lake", note: "Tree-lined streets, indie cafés, and the reservoir loop at sunset." },
  { name: "Koreatown", note: "Dense, vibrant, multilingual — the real heartbeat of central LA." },
  { name: "San Gabriel Valley", note: "Where my research meets my favorite food — dim sum and data." },
  { name: "Venice & Santa Monica", note: "Beach boardwalks, murals, and the Pacific at golden hour." },
];

const hikingSpots = [
  { name: "Griffith Park to Hollywood Sign", difficulty: "Moderate", note: "The classic — best at sunrise before the crowds arrive.", image: hiking },
  { name: "Runyon Canyon", difficulty: "Easy-Moderate", note: "Quick city escape with panoramic views of the basin.", image: landscape1 },
  { name: "Malibu Creek State Park", difficulty: "Moderate", note: "Rock pools, creek crossings, and the M*A*S*H filming site.", image: landscape2 },
];

const CityAtlas = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-dusty-blue-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            label="The City Atlas"
            title="A Personal Geography"
            description="City impressions, neighborhood guides, and travel strategies — a curated archive of places I've lived in, traveled through, and tried to understand."
          />
        </div>
      </section>

      {/* City Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-foreground mb-8">City Impressions</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Each city is a layer of memory and observation. In the future, these pages will include embedded ArcGIS maps and interactive data views.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cities.map((city) => (
              <div key={city.name} className="group cursor-pointer">
                <div className="overflow-hidden rounded-lg mb-4 relative">
                  <img src={city.image} alt={city.name} loading="lazy" width={800} height={600} className="w-full h-56 object-cover img-hover" />
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs font-sans text-muted-foreground">{city.status}</span>
                  </div>
                </div>
                <h3 className="font-serif text-xl text-foreground mb-1 group-hover:text-primary transition-colors">{city.name}</h3>
                <p className="text-sm text-muted-foreground mb-3 italic font-editorial">{city.tagline}</p>
                <div className="flex flex-wrap gap-2">
                  {city.sections.map((s) => (
                    <span key={s} className="text-xs font-sans px-2 py-1 rounded-full bg-muted text-muted-foreground">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LA Neighborhood Notes */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-foreground mb-2">LA Neighborhood Notes</h2>
          <p className="text-muted-foreground mb-12">Personal observations from the neighborhoods I've explored in Los Angeles.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {laNeighborhoods.map((n) => (
              <div key={n.name} className="p-6 rounded-lg bg-background border border-border hover:border-primary/30 transition-colors">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="font-serif text-lg text-foreground mb-1">{n.name}</h3>
                    <p className="text-sm text-muted-foreground italic font-editorial">{n.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiking */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-foreground mb-2">Hiking Recommendations</h2>
          <p className="text-muted-foreground mb-12">Favorite trails and open spaces around Los Angeles and beyond.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hikingSpots.map((trail) => (
              <div key={trail.name} className="group">
                <div className="overflow-hidden rounded-lg mb-4">
                  <img src={trail.image} alt={trail.name} loading="lazy" width={800} height={600} className="w-full h-48 object-cover img-hover" />
                </div>
                <h3 className="font-serif text-lg text-foreground mb-1">{trail.name}</h3>
                <span className="text-xs font-sans px-2 py-1 rounded-full bg-sage-light text-primary mb-2 inline-block">{trail.difficulty}</span>
                <p className="text-sm text-muted-foreground mt-2 italic font-editorial">{trail.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future maps note */}
      <section className="py-16 bg-mauve-light">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="font-serif text-2xl text-foreground mb-4">Maps Coming Soon</h3>
          <p className="text-muted-foreground leading-relaxed">
            This section will eventually include embedded ArcGIS Online maps, interactive neighborhood explorations, 
            and spatial layers that bring these city stories to life. Stay tuned.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default CityAtlas;
