import Contact from "@/components/site/Contact";
import useSeo from "@/hooks/useSeo";

const ContactPage = () => {
  useSeo({
    title: "Kontakt · WhatsApp +41 79 947 5930 | Leaner",
    description:
      "Sprechen wir über Ihr Objekt in Valposchiavo, Engadin oder St. Moritz. WhatsApp, Telegram oder Anfrageformular — Antwort innerhalb weniger Stunden.",
    path: "/contact",
  });
  return (
    <div data-testid="contact-page">
      <Contact />
    </div>
  );
};

export default ContactPage;
