import Services from "@/components/site/Services";
import useSeo from "@/hooks/useSeo";

const ServicesPage = () => {
  useSeo({
    title: "Leistungen & Preise · Premium Reinigung Engadin | Leaner",
    description:
      "Transparente Pakete für Eigentümer in Valposchiavo, Engadin und St. Moritz: Stundenreinigung ab 48 CHF, mobile Fahrzeugpflege, Leaner-Komplex und Monats-Abonnement. Auch Gewerbe-Verträge auf Anfrage.",
    path: "/services",
  });
  return (
    <div data-testid="services-page">
      <Services />
    </div>
  );
};

export default ServicesPage;
