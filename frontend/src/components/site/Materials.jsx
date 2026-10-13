import { useLanguage } from "@/context/LanguageContext";

const MATERIAL_IMAGES = [
  // Natural Wood & Parquet
  "https://images.unsplash.com/photo-1622372738946-62e02505feb3?auto=format&fit=crop&w=1400&q=80",
  // Marble & Travertine — design-curated marble + wood intersection
  "https://static.prod-images.emergentagent.com/jobs/3bbf79ec-c34b-4056-a4c7-76732e44f73d/images/8efda15e78ede42f8892d4eb1f730eb7206aaaca3b70ef7323ecd28cdea5e991.png",
  // Panoramic Windows — chalet interior with large windows
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
  // Paving Stones — clean stonework surface
  "https://images.unsplash.com/photo-1691425700585-c108acad6467?auto=format&fit=crop&w=1400&q=80",
];

const Materials = () => {
  const { t } = useLanguage();

  return (
    <section
      id="tech"
      data-testid="materials-section"
      className="relative bg-white py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <p className="text-xs tracking-[0.3em] uppercase text-slate-500 mb-4">
              — {t.tech.overline}
            </p>
            <h2
              data-testid="materials-title"
              className="font-heading text-4xl sm:text-5xl tracking-tight text-[#0F172A] leading-[1.1]"
              style={{ fontWeight: 600 }}
            >
              {t.tech.title}
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              {t.tech.subtitle}
            </p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {t.tech.items.map((item, idx) => (
            <article
              key={idx}
              data-testid={`material-card-${idx}`}
              className="group relative overflow-hidden aspect-[5/4] cursor-default"
            >
              {/* Photo background */}
              <img
                src={MATERIAL_IMAGES[idx]}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
              />
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/95 via-[#0F172A]/55 to-[#0F172A]/15" />

              {/* Index marker */}
              <div className="absolute top-6 right-6 text-white/70 text-xs tracking-[0.3em] tabular-nums">
                0{idx + 1}
              </div>

              {/* Text content */}
              <div className="absolute inset-x-0 bottom-0 p-7 lg:p-8 text-white">
                <h3
                  className="font-heading text-2xl lg:text-3xl tracking-tight"
                  style={{ fontWeight: 600 }}
                >
                  {item.title}
                </h3>
                <p className="mt-3 text-white/85 text-sm lg:text-base leading-relaxed max-w-md font-light">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Materials;
