import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

/**
 * Editorial "Manifesto" section — numbered chapters, one-per-belief, giant
 * numerals set against restrained typography.
 */
const chapters = {
  de: [
    {
      title: "Lean-Effizienz",
      body:
        "Keine überflüssige Bewegung, kein verlorener Aufwand. Wir kommen mit dem exakt richtigen Werkzeug — und gehen, wenn das Ergebnis stimmt.",
    },
    {
      title: "Deutsche Präzision",
      body:
        "PH-neutrale Chemie für jedes Material. Kärcher-Systeme mit einstellbarem Druck. Millimetergenau, nicht überall gleich.",
    },
    {
      title: "Diskretion",
      body:
        "Wir arbeiten für Menschen, deren Objekte man nicht auf Instagram findet. Keine Vor-Ort-Werbung, kein sichtbares Branding, keine Fotos ohne Einverständnis.",
    },
    {
      title: "Kein Kompromiss",
      body:
        "Wir übernehmen nicht mehr Kunden, als wir wirklich bedienen können. Das ist der Preis für konstante Qualität.",
    },
  ],
  en: [
    {
      title: "Lean efficiency",
      body:
        "No wasted motion, no wasted client time. We arrive with the exact right tool — and we leave when the result is right.",
    },
    {
      title: "German precision",
      body:
        "PH-neutral chemistry per material. Kärcher systems with adjustable pressure. Millimeter care, not one-size-fits-all.",
    },
    {
      title: "Discretion",
      body:
        "We work for people whose properties you won't find on Instagram. No on-site advertising, no visible branding.",
    },
    {
      title: "No compromise",
      body:
        "We don't take on more clients than we can genuinely serve. That is the price of consistent quality.",
    },
  ],
  it: [
    {
      title: "Efficienza Lean",
      body:
        "Nessun movimento sprecato, nessun tempo perso. Arriviamo con lo strumento giusto — e andiamo via quando il risultato è quello atteso.",
    },
    {
      title: "Precisione tedesca",
      body:
        "Chimica PH-neutra per ogni materiale. Sistemi Kärcher a pressione regolabile. Cura al millimetro, non standard.",
    },
    {
      title: "Discrezione",
      body:
        "Lavoriamo per persone i cui immobili non troverai su Instagram. Nessuna pubblicità sul posto, nessun branding visibile.",
    },
    {
      title: "Nessun compromesso",
      body:
        "Non prendiamo più clienti di quanti possiamo davvero seguire. È il prezzo di una qualità costante.",
    },
  ],
};

const overlineByLang = {
  de: "Manifest",
  en: "Manifesto",
  it: "Manifesto",
};

const headingByLang = {
  de: "Vier Überzeugungen. Kein Kompromiss.",
  en: "Four beliefs. No compromise.",
  it: "Quattro convinzioni. Nessun compromesso.",
};

const Manifesto = () => {
  const { lang } = useLanguage();
  const list = chapters[lang] || chapters.en;

  return (
    <section
      id="manifesto"
      data-testid="manifesto-section"
      className="relative bg-white py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-xs tracking-[0.3em] uppercase text-slate-500 mb-4">
            — {overlineByLang[lang] || overlineByLang.en}
          </p>
          <h2
            className="font-heading text-4xl sm:text-5xl tracking-tight text-[#0F172A] leading-[1.1]"
            style={{ fontWeight: 600 }}
          >
            {headingByLang[lang] || headingByLang.en}
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-20 gap-y-16">
          {list.map((c, idx) => (
            <motion.article
              key={idx}
              data-testid={`manifesto-chapter-${idx}`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.95,
                ease: [0.22, 1, 0.36, 1],
                delay: idx * 0.1,
              }}
              className="relative"
            >
              <div
                className="font-heading text-[92px] sm:text-[128px] leading-[0.85] tracking-tight text-[#003B5C]/10 select-none pointer-events-none"
                style={{ fontWeight: 800 }}
                aria-hidden
              >
                0{idx + 1}
              </div>
              <div className="-mt-14 lg:-mt-20 pl-6 lg:pl-8 border-l-2 border-[#003B5C]">
                <h3
                  className="font-heading text-2xl lg:text-3xl tracking-tight text-[#0F172A]"
                  style={{ fontWeight: 600 }}
                >
                  {c.title}
                </h3>
                <p className="mt-4 text-slate-600 text-base lg:text-lg leading-relaxed max-w-md">
                  {c.body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
