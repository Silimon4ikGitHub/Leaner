import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import Materials from "@/components/site/Materials";
import Gallery from "@/components/site/Gallery";
import Contact from "@/components/site/Contact";
import Manifesto from "@/components/site/Manifesto";
import Reveal from "@/components/site/Reveal";
import useSeo from "@/hooks/useSeo";

const HomePage = () => {
  useSeo({
    title: "Leaner — Premium Cleaning & Facility · Valposchiavo & Engadin",
    description:
      "Premium Reinigung für Chalets, Villen und Boutiquen in Valposchiavo, Engadin und St. Moritz. Lean-Effizienz und deutsche Präzision. Stundenreinigung, Fahrzeugpflege, Fassaden und Pflastersteine.",
    path: "/",
  });

  return (
    <div data-testid="home-page">
      <Hero />

      {/* Manifesto — signature narrative moment */}
      <Reveal>
        <Manifesto />
      </Reveal>

      {/* Services & Pricing */}
      <Reveal>
        <Services />
      </Reveal>

      {/* Technology & Materials */}
      <Reveal>
        <Materials />
      </Reveal>

      {/* Gallery Before/After */}
      <Reveal>
        <Gallery />
      </Reveal>

      {/* Contact — final call */}
      <Reveal>
        <Contact />
      </Reveal>
    </div>
  );
};

export default HomePage;
