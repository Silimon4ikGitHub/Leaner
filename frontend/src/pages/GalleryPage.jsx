import Gallery from "@/components/site/Gallery";
import useSeo from "@/hooks/useSeo";

const GalleryPage = () => {
  useSeo({
    title: "Galerie · Vorher / Nachher | Leaner Premium Cleaning",
    description:
      "Echte Vorher-/Nachher-Beispiele unserer Arbeit: Parkett, panoramische Schaufenster, Steinfassade und Marmorboden. Ein ehrlicher Blick auf das Ergebnis.",
    path: "/gallery",
  });
  return (
    <div data-testid="gallery-page">
      <Gallery />
    </div>
  );
};

export default GalleryPage;
