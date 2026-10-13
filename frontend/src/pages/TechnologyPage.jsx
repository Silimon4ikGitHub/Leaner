import Materials from "@/components/site/Materials";
import useSeo from "@/hooks/useSeo";

const TechnologyPage = () => {
  useSeo({
    title: "Technologie & Materialien · PH-neutral, Kärcher | Leaner",
    description:
      "Kompetente Pflege für Parkett, Marmor & Travertin, Panoramafenster und Pflastersteine. PH-neutrale Chemie, Kärcher-Hochdrucksysteme, deutsche Präzision.",
    path: "/technology",
  });
  return (
    <div data-testid="technology-page">
      <Materials />
    </div>
  );
};

export default TechnologyPage;
