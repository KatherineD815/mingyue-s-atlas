import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import Layout from "@/components/Layout";
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
  { name: "Los Angeles", tagline: "Home base — neighborhoods, hiking, and a city in constant motion", image: cityLA, status: "Living here" },
  { name: "Beijing", tagline: "Four years of hutongs, policy, and northern wind", image: cityBeijing, status: "2019–2023" },
  { name: "Mexico City", tagline: "Markets, murals, and the mathematics of altitude", image: cityMexico, status: "Travel notes" },
  { name: "New York", tagline: "Walking every borough, one subway stop at a time", image: cityNewYork, status: "Travel notes" },
  { name: "San Francisco", tagline: "Hills, fog, and the poetry of infrastructure", image: citySF, status: "Travel notes" },
  { name: "Milan", tagline: "Olympic infrastructure, Italian light, and Bocconi mornings", image: cityMilan, status: "2024 Lab" },
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
      {/* Hero — immersive */}
      <section className="relative min-h-[60vh] flex items-end pb-16">
        <div className="absolute inset-0">
          <img src={cityLA} alt="City Atlas" width={1920} height={1080} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <span className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-primary mb-4 block">The City Atlas</span>
          <h1 className="font-editorial text-4xl md:text-6xl lg:text-7xl text-foreground mb-4">A Personal Geography</h1>
          <p className="text-muted-foreground leading-relaxed max-w-xl">
            City impressions, neighborhood guides, and travel strategies — a curated archive of places I've lived in, traveled through, and tried to understand.
          </p>
        </div>
      </section>

      {/* City Grid — asymmetric editorial layout */}
      <section className="py-28 gradient-to-coastal">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-editorial text-3xl md:text-4xl text-foreground mb-4">City Impressions</h2>
          <p className="text-muted-foreground mb-16 max-w-2xl leading-relaxed">
            Each city is a layer of memory and observation. In the future, these pages will include embedded ArcGIS maps and interactive data views.
          </p>

          <div className="grid grid-cols-12 gap-4 mb-8">
            {/* Large featured city */}
            <div className="col-span-12 md:col-span-8 group cursor-pointer relative overflow-hidden aspect-[16/9]">
              <img src={cities[0].image} alt={cities[0].name} loading="lazy" width={800} height={450} className="w-full h-full object-cover img-hover" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] text-primary-foreground/60 font-sans tracking-widest uppercase block mb-2">{cities[0].status}</span>
                <h3 className="font-editorial text-3xl text-primary-foreground mb-1">{cities[0].name}</h3>
                <p className="text-sm text-primary-foreground/70 font-editorial italic">{cities[0].tagline}</p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 grid grid-rows-2 gap-4">
              {cities.slice(1, 3).map(city => (
                <div key={city.name} className="group cursor-pointer relative overflow-hidden">
                  <img src={city.image} alt={city.name} loading="lazy" width={400} height={300} className="w-full h-full object-cover img-hover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[10px] text-primary-foreground/60 font-sans tracking-widest uppercase block mb-1">{city.status}</span>
                    <h3 className="font-editorial text-xl text-primary-foreground">{city.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4">
            {cities.slice(3).map(city => (
              <div key={city.name} className="col-span-6 md:col-span-4 group cursor-pointer relative overflow-hidden aspect-square">
                <img src={city.image} alt={city.name} loading="lazy" width={400} height={400} className="w-full h-full object-cover img-hover" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-[10px] text-primary-foreground/60 font-sans tracking-widest uppercase block mb-1">{city.status}</span>
                  <h3 className="font-editorial text-lg text-primary-foreground">{city.name}</h3>
                  <p className="text-xs text-primary-foreground/60 font-editorial italic mt-1 hidden md:block">{city.tagline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LA Neighborhood Notes — editorial list */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <span className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-primary mb-4 block">Los Angeles</span>
              <h2 className="font-editorial text-3xl text-foreground mb-4">Neighborhood Notes</h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Personal observations from the neighborhoods I've explored, lived near, and studied in Los Angeles.
              </p>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 space-y-0">
              {laNeighborhoods.map((n, i) => (
                <div key={n.name} className="py-6 border-b border-border group hover:bg-muted/30 transition-colors px-4 -mx-4">
                  <div className="flex items-start gap-4">
                    <MapPin size={15} className="text-primary mt-1.5 shrink-0" />
                    <div>
                      <h3 className="font-serif text-lg text-foreground mb-1 group-hover:text-primary transition-colors">{n.name}</h3>
                      <p className="text-sm text-muted-foreground font-editorial italic">{n.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hiking — editorial cards */}
      <section className="py-28 gradient-to-haze">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-primary mb-4 block">Outdoors</span>
          <h2 className="font-editorial text-3xl md:text-4xl text-foreground mb-4">Hiking Recommendations</h2>
          <p className="text-muted-foreground mb-16">Favorite trails and open spaces around Los Angeles and beyond.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hikingSpots.map((trail) => (
              <div key={trail.name} className="group">
                <div className="overflow-hidden relative mb-5">
                  <img src={trail.image} alt={trail.name} loading="lazy" width={800} height={600} className="w-full aspect-[4/3] object-cover img-hover" />
                  <div className="absolute top-4 left-4">
                    <span className="tag-dusty-blue text-xs font-sans px-3 py-1">{trail.difficulty}</span>
                  </div>
                </div>
                <h3 className="font-serif text-lg text-foreground mb-2 group-hover:text-primary transition-colors">{trail.name}</h3>
                <p className="text-sm text-muted-foreground font-editorial italic">{trail.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future maps */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <div className="editorial-quote inline-block text-left">
            <p className="font-editorial text-xl text-foreground italic leading-relaxed">
              This section will eventually include embedded ArcGIS Online maps, interactive neighborhood explorations,
              and spatial layers that bring these city stories to life.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CityAtlas;
